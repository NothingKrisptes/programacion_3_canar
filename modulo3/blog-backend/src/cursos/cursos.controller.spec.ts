import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';

const CURSO_ID     = 'aaaaaaaaaaaaaaaaaaaaaaaa';
const NOT_FOUND_ID = '999999999999999999999999';

describe('CursosController', () => {
  let controller: CursosController;

  const mockCursosService = {
    create:  jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update:  jest.fn(),
    remove:  jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosController],
      providers: [
        { provide: CursosService, useValue: mockCursosService },
      ],
    }).compile();

    controller = module.get<CursosController>(CursosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // ─────────────────────────────────────────────────────────────
  describe('create()', () => {

    it('should return SuccessResponseDto with created curso', async () => {
      const mockCurso = { _id: CURSO_ID, nombre: 'NestJS Avanzado' };
      mockCursosService.create.mockResolvedValue(mockCurso);

      const result = await controller.create({} as any);
      expect(result).toEqual({ success: true, message: 'Course created successfully', data: mockCurso });
    });

    it('should throw InternalServerErrorException when service returns null', async () => {
      mockCursosService.create.mockResolvedValue(null);
      await expect(controller.create({} as any))
        .rejects.toThrow(InternalServerErrorException);
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('findAll()', () => {

    const mockResult = {
      items: [{ _id: CURSO_ID, nombre: 'NestJS Avanzado' }],
      page: 1, limit: 10,
    };

    it('should return SuccessResponseDto with courses', async () => {
      mockCursosService.findAll.mockResolvedValue(mockResult);
      const result = await controller.findAll(1, 10);
      expect(result).toEqual({ success: true, message: 'Courses retrieved successfully', data: mockResult });
    });

    it('should call service.findAll with page and limit as object', async () => {
      mockCursosService.findAll.mockResolvedValue(mockResult);
      await controller.findAll(2, 5);
      expect(mockCursosService.findAll).toHaveBeenCalledWith({ page: 2, limit: 5 });
    });

    it('should throw InternalServerErrorException when service returns null', async () => {
      mockCursosService.findAll.mockResolvedValue(null);
      await expect(controller.findAll(1, 10))
        .rejects.toThrow(InternalServerErrorException);
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('findOne()', () => {

    it('should return SuccessResponseDto with curso', async () => {
      const mockCurso = { _id: CURSO_ID, nombre: 'NestJS Avanzado' };
      mockCursosService.findOne.mockResolvedValue(mockCurso);

      const result = await controller.findOne(CURSO_ID);
      expect(result).toEqual({ success: true, message: 'Course retrieved successfully', data: mockCurso });
    });

    it('should throw NotFoundException when curso does not exist', async () => {
      mockCursosService.findOne.mockResolvedValue(null);
      await expect(controller.findOne(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException with correct message', async () => {
      mockCursosService.findOne.mockResolvedValue(null);
      await expect(controller.findOne(NOT_FOUND_ID)).rejects.toThrow('Course not found');
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('update()', () => {

    it('should return SuccessResponseDto with updated curso', async () => {
      const mockCurso = { _id: CURSO_ID, nombre: 'NestJS v2' };
      mockCursosService.update.mockResolvedValue(mockCurso);

      const result = await controller.update(CURSO_ID, {} as any);
      expect(result).toEqual({ success: true, message: 'Course updated successfully', data: mockCurso });
    });

    it('should throw NotFoundException when curso does not exist', async () => {
      mockCursosService.update.mockResolvedValue(null);
      await expect(controller.update(NOT_FOUND_ID, {} as any))
        .rejects.toThrow(NotFoundException);
    });

    it('should call service.update with the correct id and dto', async () => {
      const dto = { nombre: 'Nuevo' } as any;
      mockCursosService.update.mockResolvedValue({ _id: CURSO_ID });
      await controller.update(CURSO_ID, dto);
      expect(mockCursosService.update).toHaveBeenCalledWith(CURSO_ID, dto);
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('remove()', () => {

    it('should return SuccessResponseDto with deleted curso', async () => {
      const mockCurso = { _id: CURSO_ID, nombre: 'NestJS Avanzado' };
      mockCursosService.remove.mockResolvedValue(mockCurso);

      const result = await controller.remove(CURSO_ID);
      expect(result).toEqual({ success: true, message: 'Course deleted successfully', data: mockCurso });
    });

    it('should throw NotFoundException when curso does not exist', async () => {
      mockCursosService.remove.mockResolvedValue(null);
      await expect(controller.remove(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

    it('should call service.remove with the correct id', async () => {
      mockCursosService.remove.mockResolvedValue({ _id: CURSO_ID });
      await controller.remove(CURSO_ID);
      expect(mockCursosService.remove).toHaveBeenCalledWith(CURSO_ID);
    });

  });

});