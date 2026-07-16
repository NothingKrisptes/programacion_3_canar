import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { QueryDto } from '../common/dto/query.dto';


@Injectable()
export class UsersService {
 constructor(
   @InjectRepository(User)
   private readonly userRepository: Repository<User>,
 ) { }


 async create(createUserDto: CreateUserDto): Promise<User | null> {
   try {
     const hashedPassword = await bcrypt.hash(createUserDto!.password!, 10);
     const user = this.userRepository.create({
       ...createUserDto,
       password: hashedPassword,
     });
     return await this.userRepository.save(user);
   } catch (err) {
     console.error('Error creating user:', err);
     return null;
   }
 }


 async findAll(
   queryDto: QueryDto,
   isActive?: boolean,
 ): Promise<Pagination<User> | null> {
   try {
     const { page, limit, search, searchField, sort, order } = queryDto;
     const query = this.userRepository.createQueryBuilder('user');


     if (isActive !== undefined) {
       query.andWhere('user.isActive = :isActive', { isActive });
     }


     if (search) {
       if (searchField) {
         switch (searchField) {
           case 'username':
             query.andWhere('user.username ILIKE :search', { search: `%${search}%` });
             break;
           case 'email':
             query.andWhere('user.email ILIKE :search', { search: `%${search}%` });
             break;
           default:
             query.andWhere(
               '(user.username ILIKE :search OR user.email ILIKE :search)',
               { search: `%${search}%` },
             );
         }
       } else {
         query.andWhere(
           '(user.username ILIKE :search OR user.email ILIKE :search)',
           { search: `%${search}%` },
         );
       }
     }


     if (sort) {
       query.orderBy(`user.${sort}`, (order ?? 'ASC') as 'ASC' | 'DESC');
     }


     return await paginate<User>(query, { page, limit });
   } catch (err) {
     console.error('Error retrieving users:', err);
     return null;
   }
 }


 async findOne(id: string): Promise<User | null> {
   try {
     return await this.userRepository.findOne({ where: { id } });
   } catch (err) {
     console.error('Error fetching user:', err);
     return null;
   }
 }


 async findByEmail(email: string) {
   return this.userRepository.findOne({ where: { email } });
 }


 async findByUsername(username: string) {
   return this.userRepository.findOne({ where: { username } });
 }


 async update(id: string, updateUserDto: UpdateUserDto) {
   const user = await this.userRepository.findOne({ where: { id } });
   if (!user) return null;


   if (updateUserDto.password) {
     updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
   }


   Object.assign(user, updateUserDto);
   return this.userRepository.save(user);
 }


 async remove(id: string) {
   const user = await this.userRepository.findOne({ where: { id } });
   if (!user) return null;
   return this.userRepository.remove(user);
 }


 async updateProfile(id: string, profile: string) {
   const user = await this.userRepository.findOne({ where: { id: id } });
   if (!user) throw new NotFoundException('User not found');
   user.profile = profile;
   return this.userRepository.save(user);
 }


 async findByGoogleId(googleId: string) {
   return this.userRepository.findOne({ where: { googleId } });
 }


 async createFromGoogle(data: { username: string; email: string; googleId: string; avatarUrl?: string }) {
   const placeholderPassword = await bcrypt.hash(`google-${Date.now()}-${Math.random().toString(36).slice(2)}`, 10);
   const user = this.userRepository.create({
     ...data,
     username: data.username || data.email.split('@')[0],
     password: placeholderPassword,
     isActive: true,
   });
   return this.userRepository.save(user);
 }


 async linkGoogleId(id: string, googleId: string, avatarUrl?: string) {
   const user = await this.userRepository.findOne({ where: { id } });
   if (!user) throw new NotFoundException('User not found');


   const existing = await this.findByGoogleId(googleId);
   if (existing && existing.id !== id) {
     throw new BadRequestException('Esta cuenta de Google ya está vinculada a otro usuario');
   }


   user.googleId = googleId;
   if (avatarUrl) user.avatarUrl = avatarUrl;
   return this.userRepository.save(user);
 }


 async unlinkGoogleId(id: string) {
   const user = await this.userRepository.findOne({ where: { id } });
   if (!user) throw new NotFoundException('User not found');
   if (!user.password) {
     throw new BadRequestException(
       'No puedes desvincular Google sin antes definir una contraseña para tu cuenta',
     );
   }
   user.googleId = null;
   user.avatarUrl = null;
   return this.userRepository.save(user);
 }
}
