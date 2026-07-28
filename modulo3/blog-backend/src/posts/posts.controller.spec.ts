import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

const POST_ID      = '11111111-1111-1111-1111-111111111111';
const CATEGORY_ID  = '44444444-4444-4444-4444-444444444444';
const NOT_FOUND_ID = '99999999-9999-9999-9999-999999999999';

describe('PostsController', () => {
  let controller: PostsController;

  const mockPostsService = {
    create:  jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update:  jest.fn(),
    remove:  jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        { provide: PostsService, useValue: mockPostsService },
      ],
    }).compile();

    controller = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {

    it('should return SuccessResponseDto with the created post', async () => {
      const dto      = { title: 'Nuevo', content: 'Contenido', categoryId: CATEGORY_ID };
      const mockPost = { id: POST_ID, ...dto };
      mockPostsService.create.mockResolvedValue(mockPost);

      const result = await controller.create(dto);
      expect(result).toEqual({ success: true, message: 'Post created successfully', data: mockPost });
    });

    it('should throw NotFoundException when service returns null', async () => {
      mockPostsService.create.mockResolvedValue(null);
      await expect(controller.create({ title: 'Post', content: 'Texto', categoryId: NOT_FOUND_ID }))
        .rejects.toThrow(NotFoundException);
    });

    it('should call postsService.create with the provided dto', async () => {
      const dto = { title: 'Post', content: 'Texto', categoryId: CATEGORY_ID };
      mockPostsService.create.mockResolvedValue(null);
      try { await controller.create(dto); } catch {}
      expect(mockPostsService.create).toHaveBeenCalledWith(dto);
    });

  });

  describe('findAll()', () => {

    const mockPagination = {
      items: [{ id: POST_ID, title: 'Post A' }],
      meta: { currentPage: 1, totalPages: 1, itemCount: 1, totalItems: 1, itemsPerPage: 10 },
    };

    it('should return SuccessResponseDto with paginated posts', async () => {
      mockPostsService.findAll.mockResolvedValue(mockPagination);
      const result = await controller.findAll({ page: 1, limit: 10 });
      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockPagination);
    });

    it('should throw InternalServerErrorException when service returns null', async () => {
      mockPostsService.findAll.mockResolvedValue(null);
      await expect(controller.findAll({ page: 1, limit: 10 }))
        .rejects.toThrow(InternalServerErrorException);
    });

    it('should cap limit to 100 when limit exceeds 100', async () => {
      mockPostsService.findAll.mockResolvedValue(mockPagination);
      const query = { page: 1, limit: 200 };
      await controller.findAll(query);
      expect(mockPostsService.findAll).toHaveBeenCalledWith(
        expect.objectContaining({ limit: 100 })
      );
    });

  });

  describe('findOne()', () => {

    it('should return SuccessResponseDto when post exists', async () => {
      const mockPost = { id: POST_ID, title: 'Bienvenidos', content: 'Primer post' };
      mockPostsService.findOne.mockResolvedValue(mockPost);

      const result = await controller.findOne(POST_ID);
      expect(result).toEqual({ success: true, message: 'Post retrieved successfully', data: mockPost });
    });

    it('should throw NotFoundException when post does not exist', async () => {
      mockPostsService.findOne.mockResolvedValue(null);
      await expect(controller.findOne(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException with correct message', async () => {
      mockPostsService.findOne.mockResolvedValue(null);
      await expect(controller.findOne(POST_ID)).rejects.toThrow('Post not found');
    });

    it('should call postsService.findOne with the correct id', async () => {
      mockPostsService.findOne.mockResolvedValue({ id: POST_ID, title: 'Test' });
      await controller.findOne(POST_ID);
      expect(mockPostsService.findOne).toHaveBeenCalledWith(POST_ID);
    });

  });

  describe('update()', () => {

    it('should return SuccessResponseDto with updated post', async () => {
      const mockPost = { id: POST_ID, title: 'Actualizado' };
      mockPostsService.update.mockResolvedValue(mockPost);

      const result = await controller.update(POST_ID, { title: 'Actualizado', content: 'x', categoryId: CATEGORY_ID });
      expect(result).toEqual({ success: true, message: 'Post updated successfully', data: mockPost });
    });

    it('should throw NotFoundException when post or category not found', async () => {
      mockPostsService.update.mockResolvedValue(null);
      await expect(controller.update(NOT_FOUND_ID, { title: 'x', content: 'y' }))
        .rejects.toThrow(NotFoundException);
    });

  });

  describe('remove()', () => {

    it('should return SuccessResponseDto when post is deleted', async () => {
      mockPostsService.remove.mockResolvedValue(true);
      const result = await controller.remove(POST_ID);
      expect(result).toEqual({ success: true, message: 'Post deleted successfully', data: POST_ID });
    });

    it('should throw NotFoundException when post does not exist', async () => {
      mockPostsService.remove.mockResolvedValue(false);
      await expect(controller.remove(NOT_FOUND_ID)).rejects.toThrow(NotFoundException);
    });

  });

});