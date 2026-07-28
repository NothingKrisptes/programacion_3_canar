import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

const CATEGORY_ID  = '44444444-4444-4444-4444-444444444444';
const NOT_FOUND_ID = '99999999-9999-9999-9999-999999999999';

describe('CategoriesController', () => {
  let controller: CategoriesController;

  const mockCategoriesService = {
    create:  jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update:  jest.fn(),
    remove:  jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        { provide: CategoriesService, useValue: mockCategoriesService },
      ],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {

    it('should return SuccessResponseDto with created category', async () => {
      const mockCategory = { id: CATEGORY_ID, name: 'Tecnología' };
      mockCategoriesService.create.mockResolvedValue(mockCategory);

      const result = await controller.create({ name: 'Tecnología' });
      expect(result).toEqual({ success: true, message: 'Category created successfully', data: mockCategory });
    });

    it('should throw InternalServerErrorException when service returns null', async () => {
      mockCategoriesService.create.mockResolvedValue(null);
      await expect(controller.create({ name: 'x' })).rejects.toThrow(InternalServerErrorException);
    });

  });

  describe('findAll()', () => {

    const mockPagination = {
      items: [{ id: CATEGORY_ID, name: 'Tech' }],
      meta: { currentPage: 1, totalPages: 1, itemCount: 1, totalItems: 1, itemsPerPage: 10 },
    };

    it('should return SuccessResponseDto with paginated categories', async () => {
      mockCategoriesService.findAll.mockResolvedValue(mockPagination);
      const result = await controller.findAll({ page: 1, limit: 10 });
      expect(result.data).toEqual(mockPagination);
      expect(result.success).toBe(true);
    });

    it('should throw InternalServerErrorException when service returns null', async () => {
      mockCategoriesService.findAll.mockResolvedValue(null);
      await expect(controller.findAll({ page: 1, limit: 10 })).rejects.toThrow(InternalServerErrorException);
    });

    it('should cap limit to 100 when limit exceeds 100', async () => {
      mockCategoriesService.findAll.mockResolvedValue(mockPagination);
      const query = { page: 1, limit: 200 };
      await controller.findAll(query);
      expect(mockCategoriesService.findAll).toHaveBeenCalledWith(
        expect.objectContaining({ limit: 100 })
      );
    });

  });

  describe('findOne()', () => {

    it('should return SuccessResponseDto with category', async () => {
      const mockCategory = { id: CATEGORY_ID, name: 'Tech' };
      mockCategoriesService.findOne.mockResolvedValue(mockCategory);

      const result = await controller.findOne(CATEGORY_ID);
      expect(result).toEqual({ success: true, message: 'Category retrieved successfully', data: mockCategory });
    });

    it('should throw NotFoundException when category does not exist', async () => {
      mockCategoriesService.findOne.mockResolvedValue(null);
      await expect(controller.findOne(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

  });

  describe('update()', () => {

    it('should return SuccessResponseDto with updated category', async () => {
      const mockCategory = { id: CATEGORY_ID, name: 'Tech v2' };
      mockCategoriesService.update.mockResolvedValue(mockCategory);

      const result = await controller.update(CATEGORY_ID, { name: 'Tech v2' });
      expect(result).toEqual({ success: true, message: 'Category updated successfully', data: mockCategory });
    });

    it('should throw NotFoundException when category does not exist', async () => {
      mockCategoriesService.update.mockResolvedValue(null);
      await expect(controller.update(NOT_FOUND_ID, { name: 'x' }))
        .rejects.toThrow(NotFoundException);
    });

    it('should call service.update with the correct id and dto', async () => {
      mockCategoriesService.update.mockResolvedValue({ id: CATEGORY_ID, name: 'Nuevo' });
      const dto = { name: 'Nuevo' };
      await controller.update(CATEGORY_ID, dto);
      expect(mockCategoriesService.update).toHaveBeenCalledWith(CATEGORY_ID, dto);
    });

  });

  describe('remove()', () => {

    it('should return SuccessResponseDto with deleted category', async () => {
      const mockCategory = { id: CATEGORY_ID, name: 'Tech' };
      mockCategoriesService.remove.mockResolvedValue(mockCategory);

      const result = await controller.remove(CATEGORY_ID);
      expect(result).toEqual({ success: true, message: 'Category deleted successfully', data: mockCategory });
    });

    it('should throw NotFoundException when category does not exist', async () => {
      mockCategoriesService.remove.mockResolvedValue(null);
      await expect(controller.remove(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

    it('should call service.remove with the correct id', async () => {
      mockCategoriesService.remove.mockResolvedValue({ id: CATEGORY_ID });
      await controller.remove(CATEGORY_ID);
      expect(mockCategoriesService.remove).toHaveBeenCalledWith(CATEGORY_ID);
    });

  });

});