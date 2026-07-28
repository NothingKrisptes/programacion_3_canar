import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    login:    jest.fn(),
    register: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login()', () => {

    it('should return access_token on successful login', async () => {
      mockAuthService.login.mockResolvedValue('mi.jwt.token');

      const result = await controller.login({ username: 'admin', password: 'pass' });
      expect(result).toEqual({
        success: true,
        message: 'Login successful',
        data:    { access_token: 'mi.jwt.token' },
      });
    });

    it('should throw UnauthorizedException when credentials are invalid', async () => {
      mockAuthService.login.mockResolvedValue(null);
      await expect(controller.login({ username: 'x', password: 'wrong' }))
        .rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException with correct message', async () => {
      mockAuthService.login.mockResolvedValue(null);
      await expect(controller.login({ username: 'x', password: 'y' }))
        .rejects.toThrow('Invalid credentials');
    });

  });

  describe('register()', () => {

    it('should return access_token on successful registration', async () => {
      mockAuthService.register.mockResolvedValue('nuevo.jwt.token');

      const result = await controller.register({ username: 'nuevo', password: 'pass', email: 'n@n.com' });
      expect(result).toEqual({
        success: true,
        message: 'Registration successful',
        data:    { access_token: 'nuevo.jwt.token' },
      });
    });

    it('should throw BadRequestException when registration fails', async () => {
      mockAuthService.register.mockResolvedValue(null);
      await expect(controller.register({ username: 'x', password: 'y', email: 'z@z.com' }))
        .rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException with correct message', async () => {
      mockAuthService.register.mockResolvedValue(null);
      await expect(controller.register({ username: 'x', password: 'y', email: 'z@z.com' }))
        .rejects.toThrow('Failed to register user');
    });

  });

});