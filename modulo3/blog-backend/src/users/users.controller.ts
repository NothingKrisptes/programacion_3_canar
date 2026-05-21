import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Query, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { QueryDto } from 'src/common/dto/query.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
 constructor(private readonly usersService: UsersService) {}

  @Post()
 async create(@Body() dto: CreateUserDto) {
   const user = await this.usersService.create(dto);
   return new SuccessResponseDto('User created successfully', user);
 }

 @Get()
 async findAll(@Query() query: QueryDto) {
   const result = await this.usersService.findAll(query);
   return new SuccessResponseDto('Users retrieved successfully', result);
 }

 @Get(':id')
 async findOne(@Param('id') id: string) {
   const user = await this.usersService.findOne(id);
   if (!user) throw new NotFoundException('User not found');
   return new SuccessResponseDto('User retrieved successfully', user);
 }

 @Put(':id')
 async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
   const user = await this.usersService.update(id, dto);
   if (!user) throw new NotFoundException('User not found');
   return new SuccessResponseDto('User updated successfully', user);
 }

 @Delete(':id')
 async remove(@Param('id') id: string) {
   const user = await this.usersService.remove(id);
   if (!user) throw new NotFoundException('User not found');
   return new SuccessResponseDto('Category deleted successfully', user);
 }
}
