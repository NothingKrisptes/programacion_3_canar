jest.mock('nestjs-typeorm-paginate', () => ({
  paginate: jest.fn(),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { paginate } from 'nestjs-typeorm-paginate';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

const mockPaginate = paginate as jest.Mock;

const CATEGORY_ID   = '44444444-4444-4444-4444-444444444444';
const CATEGORY_ID_2 = '55555555-5555-5555-5555-555555555555';
const NOT_FOUND_ID  = '99999999-9999-9999-9999-999999999999';

describe('CategoriesService', () => {
  let service: CategoriesService;

  const mockQueryBuilder = {
    where:   jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
  };

  const mockCategoryRepository = {
    create:             jest.fn(),
    save:               jest.fn(),
    findOne:            jest.fn(),
    remove:             jest.fn(),
    createQueryBuilder: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    mockCategoryRepository.createQueryBuilder.mockReturnValue(mockQueryBuilder);
    mockQueryBuilder.where.mockReturnThis();
    mockQueryBuilder.orderBy.mockReturnThis();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        { provide: getRepositoryToken(Category), useValue: mockCategoryRepository },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {

    it('should create and return a category', async () => {
      const mockCategory = { id: CATEGORY_ID, name: 'Tecnología' };
      mockCategoryRepository.create.mockReturnValue(mockCategory);
      mockCategoryRepository.save.mockResolvedValue(mockCategory);
      expect(await service.create({ name: 'Tecnología' })).toEqual(mockCategory);
    });

    it('should call repository.create with the provided dto', async () => {
      const dto = { name: 'Ciencia' };
      mockCategoryRepository.create.mockReturnValue({});
      mockCategoryRepository.save.mockResolvedValue({ id: CATEGORY_ID_2, ...dto });
      await service.create(dto);
      expect(mockCategoryRepository.create).toHaveBeenCalledWith(dto);
    });

    it('should return null when repository throws', async () => {
      mockCategoryRepository.create.mockReturnValue({});
      mockCategoryRepository.save.mockRejectedValue(new Error('Constraint error'));
      expect(await service.create({ name: 'Duplicado' })).toBeNull();
    });

  });

  describe('findOne()', () => {

    it('should return a category when it exists', async () => {
      const mockCategory = { id: CATEGORY_ID, name: 'Tecnología' };
      mockCategoryRepository.findOne.mockResolvedValue(mockCategory);
      const result = await service.findOne(CATEGORY_ID);
      expect(result).toEqual(mockCategory);
      expect(mockCategoryRepository.findOne).toHaveBeenCalledWith({ where: { id: CATEGORY_ID } });
    });

    it('should return null when category does not exist', async () => {
      mockCategoryRepository.findOne.mockResolvedValue(null);
      expect(await service.findOne(NOT_FOUND_ID)).toBeNull();
    });

    it('should return null when repository throws', async () => {
      mockCategoryRepository.findOne.mockRejectedValue(new Error('DB error'));
      expect(await service.findOne(CATEGORY_ID)).toBeNull();
    });

  });

  describe('update()', () => {

    it('should return null when category does not exist', async () => {
      mockCategoryRepository.findOne.mockResolvedValue(null);
      expect(await service.update(NOT_FOUND_ID, { name: 'Nuevo' })).toBeNull();
    });

    it('should update and return the category', async () => {
      mockCategoryRepository.findOne.mockResolvedValue({ id: CATEGORY_ID, name: 'Viejo' });
      mockCategoryRepository.save.mockResolvedValue({ id: CATEGORY_ID, name: 'Nuevo' });
      expect(await service.update(CATEGORY_ID, { name: 'Nuevo' })).toEqual({ id: CATEGORY_ID, name: 'Nuevo' });
    });

    it('should apply dto fields to the existing category', async () => {
      mockCategoryRepository.findOne.mockResolvedValue({ id: CATEGORY_ID, name: 'Viejo' });
      mockCategoryRepository.save.mockImplementation((cat) => Promise.resolve(cat));
      const result = await service.update(CATEGORY_ID, { name: 'Actualizado' });
      expect(result).toHaveProperty('name', 'Actualizado');
    });

    it('should return null when save throws', async () => {
      mockCategoryRepository.findOne.mockResolvedValue({ id: CATEGORY_ID, name: 'Cat' });
      mockCategoryRepository.save.mockRejectedValue(new Error('Save error'));
      expect(await service.update(CATEGORY_ID, { name: 'x' })).toBeNull();
    });

  });

  describe('remove()', () => {

    it('should return null when category does not exist', async () => {
      mockCategoryRepository.findOne.mockResolvedValue(null);
      expect(await service.remove(NOT_FOUND_ID)).toBeNull();
    });

    it('should call repository.remove with the found category', async () => {
      const mockCategory = { id: CATEGORY_ID, name: 'Tech' };
      mockCategoryRepository.findOne.mockResolvedValue(mockCategory);
      mockCategoryRepository.remove.mockResolvedValue(mockCategory);
      await service.remove(CATEGORY_ID);
      expect(mockCategoryRepository.remove).toHaveBeenCalledWith(mockCategory);
    });

    it('should return the removed category', async () => {
      const mockCategory = { id: CATEGORY_ID, name: 'Tech' };
      mockCategoryRepository.findOne.mockResolvedValue(mockCategory);
      mockCategoryRepository.remove.mockResolvedValue(mockCategory);
      expect(await service.remove(CATEGORY_ID)).toEqual(mockCategory);
    });

    it('should return null when remove throws', async () => {
      mockCategoryRepository.findOne.mockResolvedValue({ id: CATEGORY_ID });
      mockCategoryRepository.remove.mockRejectedValue(new Error('FK constraint'));
      expect(await service.remove(CATEGORY_ID)).toBeNull();
    });

  });

  describe('findAll()', () => {

    const mockPaginationResult = {
      items: [{ id: CATEGORY_ID, name: 'Tech' }, { id: CATEGORY_ID_2, name: 'Ciencia' }],
      meta: { currentPage: 1, totalPages: 1, itemCount: 2, totalItems: 2, itemsPerPage: 10 },
    };

    it('should return paginated categories', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      expect(await service.findAll({ page: 1, limit: 10 })).toEqual(mockPaginationResult);
    });

    it('should call createQueryBuilder with "category" alias', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      await service.findAll({ page: 1, limit: 10 });
      expect(mockCategoryRepository.createQueryBuilder).toHaveBeenCalledWith('category');
    });

    it('should call where when search is provided', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      await service.findAll({ page: 1, limit: 10, search: 'Tech' });
      expect(mockQueryBuilder.where).toHaveBeenCalled();
    });

    it('should not call where when search is not provided', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      await service.findAll({ page: 1, limit: 10 });
      expect(mockQueryBuilder.where).not.toHaveBeenCalled();
    });

    it('should call orderBy when sort is provided', async () => {
      mockPaginate.mockResolvedValue(mockPaginationResult);
      await service.findAll({ page: 1, limit: 10, sort: 'name', order: 'DESC' });
      expect(mockQueryBuilder.orderBy).toHaveBeenCalledWith('category.name', 'DESC');
    });

    it('should return null when paginate throws', async () => {
      mockPaginate.mockRejectedValue(new Error('DB error'));
      expect(await service.findAll({ page: 1, limit: 10 })).toBeNull();
    });

  });

});