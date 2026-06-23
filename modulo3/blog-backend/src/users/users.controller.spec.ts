import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

const USER_ID      = '33333333-3333-3333-3333-333333333333';
const NOT_FOUND_ID = '99999999-9999-9999-9999-999999999999';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    create:        jest.fn(),
    findAll:       jest.fn(),
    findOne:       jest.fn(),
    update:        jest.fn(),
    remove:        jest.fn(),
    updateProfile: jest.fn(),
  };

  const mockFile: Express.Multer.File = {
    fieldname:    'profile',
    originalname: 'foto.jpg',
    encoding:     '7bit',
    mimetype:     'image/jpeg',
    destination:  './public/profile',
    filename:     '1749600000000-foto.jpg',
    path:         './public/profile/1749600000000-foto.jpg',
    size:         1000,
    buffer:       Buffer.from(''),
    stream:       null as any,
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockUsersService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {

    it('should return SuccessResponseDto with created user', async () => {
      const dto      = { username: 'ana', email: 'ana@test.com', password: 'pass' };
      const mockUser = { id: USER_ID, username: 'ana', email: 'ana@test.com' };
      mockUsersService.create.mockResolvedValue(mockUser);

      const result = await controller.create(dto);
      expect(result).toEqual({ success: true, message: 'User created successfully', data: mockUser });
    });

    it('should call usersService.create with the dto', async () => {
      const dto = { username: 'luis', email: 'luis@test.com', password: 'p' };
      mockUsersService.create.mockResolvedValue({ id: USER_ID });
      await controller.create(dto);
      expect(mockUsersService.create).toHaveBeenCalledWith(dto);
    });

  });

  describe('findAll()', () => {

    it('should return SuccessResponseDto with user list', async () => {
      const mockPagination = {
        items: [{ id: USER_ID, username: 'ana' }],
        meta: { currentPage: 1, totalPages: 1, itemCount: 1, totalItems: 1, itemsPerPage: 10 },
      };
      mockUsersService.findAll.mockResolvedValue(mockPagination);

      const result = await controller.findAll({ page: 1, limit: 10 });
      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockPagination);
    });

    it('should call usersService.findAll with the query', async () => {
      mockUsersService.findAll.mockResolvedValue({ items: [], meta: {} });
      const query = { page: 2, limit: 5 };
      await controller.findAll(query);
      expect(mockUsersService.findAll).toHaveBeenCalledWith(query);
    });

  });

  describe('findOne()', () => {

    it('should return SuccessResponseDto with user', async () => {
      const mockUser = { id: USER_ID, username: 'ana' };
      mockUsersService.findOne.mockResolvedValue(mockUser);

      const result = await controller.findOne(USER_ID);
      expect(result).toEqual({ success: true, message: 'User retrieved successfully', data: mockUser });
    });

    it('should throw NotFoundException when user does not exist', async () => {
      mockUsersService.findOne.mockResolvedValue(null);
      await expect(controller.findOne(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

    it('should call usersService.findOne with the correct id', async () => {
      mockUsersService.findOne.mockResolvedValue({ id: USER_ID });
      await controller.findOne(USER_ID);
      expect(mockUsersService.findOne).toHaveBeenCalledWith(USER_ID);
    });

  });

  describe('update()', () => {

    it('should return SuccessResponseDto with updated user', async () => {
      const mockUser = { id: USER_ID, username: 'ana-v2' };
      mockUsersService.update.mockResolvedValue(mockUser);

      const result = await controller.update(USER_ID, { username: 'ana-v2' });
      expect(result).toEqual({ success: true, message: 'User updated successfully', data: mockUser });
    });

    it('should throw NotFoundException when user does not exist', async () => {
      mockUsersService.update.mockResolvedValue(null);
      await expect(controller.update(NOT_FOUND_ID, { username: 'x' }))
        .rejects.toThrow(NotFoundException);
    });

    it('should call usersService.update with correct id and dto', async () => {
      mockUsersService.update.mockResolvedValue({ id: USER_ID });
      const dto = { username: 'nuevo' };
      await controller.update(USER_ID, dto);
      expect(mockUsersService.update).toHaveBeenCalledWith(USER_ID, dto);
    });

  });

  describe('remove()', () => {

    it('should return SuccessResponseDto when user is deleted', async () => {
      const mockUser = { id: USER_ID, username: 'ana' };
      mockUsersService.remove.mockResolvedValue(mockUser);

      const result = await controller.remove(USER_ID);
      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockUser);
    });

    it('should throw NotFoundException when user does not exist', async () => {
      mockUsersService.remove.mockResolvedValue(null);
      await expect(controller.remove(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

  });

  describe('uploadProfile()', () => {

    it('should return SuccessResponseDto with updated user', async () => {
      const mockUser = { id: USER_ID, profile: mockFile.filename };
      mockUsersService.updateProfile.mockResolvedValue(mockUser);

      const result = await controller.uploadProfile(USER_ID, mockFile);
      expect(result).toEqual({ success: true, message: 'Profile image updated', data: mockUser });
    });

    it('should call usersService.updateProfile with id and filename', async () => {
      mockUsersService.updateProfile.mockResolvedValue({ id: USER_ID });
      await controller.uploadProfile(USER_ID, mockFile);
      expect(mockUsersService.updateProfile).toHaveBeenCalledWith(USER_ID, mockFile.filename);
    });

    it('should throw BadRequestException when no file is provided', async () => {
      await expect(controller.uploadProfile(USER_ID, undefined as any))
        .rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException with correct message', async () => {
      await expect(controller.uploadProfile(USER_ID, null as any))
        .rejects.toThrow('Profile image is required');
    });

    it('should not call updateProfile when file is missing', async () => {
      try { await controller.uploadProfile(USER_ID, undefined as any); } catch {}
      expect(mockUsersService.updateProfile).not.toHaveBeenCalled();
    });

  });

});