jest.mock('bcrypt', () => ({
  compare: jest.fn(),
  hash:    jest.fn(),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const USER_ID = '33333333-3333-3333-3333-333333333333';

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersService = {
    findByUsername: jest.fn(),
    create:         jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService,   useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login()', () => {

    it('should return null when user does not exist', async () => {
      mockUsersService.findByUsername.mockResolvedValue(null);
      expect(await service.login({ username: 'noexiste', password: '1234' })).toBeNull();
    });

    it('should return null when password is incorrect', async () => {
      const mockUser = { id: USER_ID, username: 'admin', password: '$2b$10$hash' };
      mockUsersService.findByUsername.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);
      expect(await service.login({ username: 'admin', password: 'wrong' })).toBeNull();
    });

    it('should return a JWT token on successful login', async () => {
      const mockUser = { id: USER_ID, username: 'admin', password: '$2b$10$hash' };
      mockUsersService.findByUsername.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('jwt.token.aqui');

      const result = await service.login({ username: 'admin', password: 'correcta' });
      expect(result).toBe('jwt.token.aqui');
    });

    it('should call jwtService.sign with correct payload', async () => {
      const mockUser = { id: USER_ID, username: 'maria', password: '$2b$10$hash' };
      mockUsersService.findByUsername.mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('token');

      await service.login({ username: 'maria', password: 'pass' });
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: USER_ID, username: 'maria' });
    });

    it('should return null on unexpected error', async () => {
      mockUsersService.findByUsername.mockRejectedValue(new Error('DB connection error'));
      expect(await service.login({ username: 'admin', password: 'pass' })).toBeNull();
    });

  });

  describe('register()', () => {

    it('should return null when user creation fails', async () => {
      mockUsersService.create.mockResolvedValue(null);
      expect(await service.register({ username: 'nuevo', password: 'pass123', email: 'nuevo@test.com' })).toBeNull();
    });

    it('should return a JWT token on successful registration', async () => {
      const mockUser = { id: USER_ID, username: 'nuevo', email: 'nuevo@test.com' };
      mockUsersService.create.mockResolvedValue(mockUser);
      mockJwtService.sign.mockReturnValue('registro.token');

      const result = await service.register({ username: 'nuevo', password: 'pass123', email: 'nuevo@test.com' });
      expect(result).toBe('registro.token');
    });

    it('should call usersService.create with the dto', async () => {
      const dto = { username: 'nuevo', password: 'pass123', email: 'nuevo@test.com' };
      mockUsersService.create.mockResolvedValue(null);
      await service.register(dto);
      expect(mockUsersService.create).toHaveBeenCalledWith(dto);
    });

    it('should not call jwtService.sign when user creation fails', async () => {
      mockUsersService.create.mockResolvedValue(null);
      await service.register({ username: 'x', password: 'y', email: 'z@z.com' });
      expect(mockJwtService.sign).not.toHaveBeenCalled();
    });

  });

});