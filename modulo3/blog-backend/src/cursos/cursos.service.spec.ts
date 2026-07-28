import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { CursosService } from './cursos.service';
import { Curso } from './schemas/curso.schema';
import { Contenido } from './schemas/contenido.schema';

const CURSO_ID     = 'aaaaaaaaaaaaaaaaaaaaaaaa';
const CURSO_ID_2   = 'bbbbbbbbbbbbbbbbbbbbbbbb';
const NOT_FOUND_ID = '999999999999999999999999';

describe('CursosService', () => {
  let service: CursosService;

  // ── cadena para find().skip().limit().populate()
  const mockFindChain = {
    skip:    jest.fn().mockReturnThis(),
    limit:   jest.fn().mockReturnThis(),
    populate: jest.fn(),
  };

  // ── cadena para findById().populate()
  const mockFindByIdChain = { populate: jest.fn() };

  // ── instancia de documento devuelta por new cursoModel()
  const mockCursoInstance = {
    save:      jest.fn(),
    deleteOne: jest.fn(),
    contenidos: [],
  };

  // ── instancia de documento devuelta por new contenidoModel()
  const mockContenidoInstance = { save: jest.fn(), _id: 'cccccccccccccccccccccccc' };

  // ── modelo como función constructora + métodos estáticos
  const mockCursoModel = Object.assign(jest.fn().mockReturnValue(mockCursoInstance), {
    find:    jest.fn().mockReturnValue(mockFindChain),
    findById: jest.fn().mockReturnValue(mockFindByIdChain),
  });

  const mockContenidoModel = Object.assign(jest.fn().mockReturnValue(mockContenidoInstance), {
    create: jest.fn(),
  });

  beforeEach(async () => {
    jest.clearAllMocks();

    // Restaurar implementaciones de cadena tras clearAllMocks
    mockCursoModel.mockReturnValue(mockCursoInstance);
    mockCursoModel.find.mockReturnValue(mockFindChain);
    mockFindChain.skip.mockReturnThis();
    mockFindChain.limit.mockReturnThis();
    mockCursoModel.findById.mockReturnValue(mockFindByIdChain);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CursosService,
        { provide: getModelToken(Curso.name),     useValue: mockCursoModel },
        { provide: getModelToken(Contenido.name), useValue: mockContenidoModel },
      ],
    }).compile();

    service = module.get<CursosService>(CursosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // ─────────────────────────────────────────────────────────────
  describe('create()', () => {

    const dto = {
      nombre: 'NestJS Avanzado', descripcion: 'Aprende NestJS', categoria: 'Backend',
      fecha_inicio: new Date(), fecha_fin: new Date(), nivel: 'intermedio',
      requisitos: ['TypeScript'], precio: 50,
      instructor: { nombre: 'Ana García', email: 'ana@mail.com' },
    };

    it('should create and return a curso', async () => {
      const mockCurso = { _id: CURSO_ID, ...dto };
      mockCursoInstance.save.mockResolvedValue(mockCurso);
      expect(await service.create(dto)).toEqual(mockCurso);
    });

    it('should call the cursoModel constructor with course data', async () => {
      mockCursoInstance.save.mockResolvedValue({ _id: CURSO_ID });
      await service.create(dto);
      expect(mockCursoModel).toHaveBeenCalledWith(expect.objectContaining({ nombre: dto.nombre }));
    });

    it('should return null when save throws', async () => {
      mockCursoInstance.save.mockRejectedValue(new Error('DB error'));
      expect(await service.create(dto)).toBeNull();
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('findAll()', () => {

    const mockCursos = [
      { _id: CURSO_ID,   nombre: 'NestJS Avanzado' },
      { _id: CURSO_ID_2, nombre: 'Docker Básico' },
    ];

    it('should return items with page and limit', async () => {
      mockFindChain.populate.mockResolvedValue(mockCursos);
      const result = await service.findAll({ page: 1, limit: 10 });
      expect(result).toEqual({ items: mockCursos, page: 1, limit: 10 });
    });

    it('should call find().skip().limit().populate()', async () => {
      mockFindChain.populate.mockResolvedValue([]);
      await service.findAll({ page: 1, limit: 10 });
      expect(mockCursoModel.find).toHaveBeenCalled();
      expect(mockFindChain.skip).toHaveBeenCalledWith(0);
      expect(mockFindChain.limit).toHaveBeenCalledWith(10);
      expect(mockFindChain.populate).toHaveBeenCalledWith('contenidos');
    });

    it('should calculate skip correctly for page 2', async () => {
      mockFindChain.populate.mockResolvedValue([]);
      await service.findAll({ page: 2, limit: 5 });
      expect(mockFindChain.skip).toHaveBeenCalledWith(5);
    });

    it('should return null when find throws', async () => {
      mockFindChain.populate.mockRejectedValue(new Error('DB timeout'));
      expect(await service.findAll({ page: 1, limit: 10 })).toBeNull();
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('findOne()', () => {

    it('should return a curso when it exists', async () => {
      const mockCurso = { _id: CURSO_ID, nombre: 'NestJS Avanzado' };
      mockFindByIdChain.populate.mockResolvedValue(mockCurso);
      expect(await service.findOne(CURSO_ID)).toEqual(mockCurso);
      expect(mockCursoModel.findById).toHaveBeenCalledWith(CURSO_ID);
    });

    it('should return null when curso does not exist', async () => {
      mockFindByIdChain.populate.mockResolvedValue(null);
      expect(await service.findOne(NOT_FOUND_ID)).toBeNull();
    });

    it('should return null when findById throws', async () => {
      mockFindByIdChain.populate.mockRejectedValue(new Error('Invalid ObjectId'));
      expect(await service.findOne(CURSO_ID)).toBeNull();
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('update()', () => {

    it('should return null when curso does not exist', async () => {
      mockFindByIdChain.populate.mockResolvedValue(null);
      expect(await service.update(NOT_FOUND_ID, {} as any)).toBeNull();
    });

    it('should update and return the curso', async () => {
      const curso  = { _id: CURSO_ID, nombre: 'Viejo', save: mockCursoInstance.save, contenidos: [] };
      const saved  = { _id: CURSO_ID, nombre: 'Nuevo' };
      mockFindByIdChain.populate.mockResolvedValue(curso);
      mockCursoInstance.save.mockResolvedValue(saved);
      expect(await service.update(CURSO_ID, { nombre: 'Nuevo' } as any)).toEqual(saved);
    });

    it('should return null when save throws', async () => {
      const curso = { _id: CURSO_ID, save: mockCursoInstance.save, contenidos: [] };
      mockFindByIdChain.populate.mockResolvedValue(curso);
      mockCursoInstance.save.mockRejectedValue(new Error('Save error'));
      expect(await service.update(CURSO_ID, {} as any)).toBeNull();
    });

  });

  // ─────────────────────────────────────────────────────────────
  describe('remove()', () => {

    it('should return null when curso does not exist', async () => {
      mockFindByIdChain.populate.mockResolvedValue(null);
      expect(await service.remove(NOT_FOUND_ID)).toBeNull();
    });

    it('should call deleteOne on the found curso', async () => {
      const curso = { _id: CURSO_ID, deleteOne: mockCursoInstance.deleteOne };
      mockFindByIdChain.populate.mockResolvedValue(curso);
      mockCursoInstance.deleteOne.mockResolvedValue(curso);
      await service.remove(CURSO_ID);
      expect(mockCursoInstance.deleteOne).toHaveBeenCalled();
    });

    it('should return the deleted curso', async () => {
      const curso = { _id: CURSO_ID, nombre: 'NestJS', deleteOne: mockCursoInstance.deleteOne };
      mockFindByIdChain.populate.mockResolvedValue(curso);
      mockCursoInstance.deleteOne.mockResolvedValue(curso);
      expect(await service.remove(CURSO_ID)).toEqual(curso);
    });

    it('should return null when deleteOne throws', async () => {
      const curso = { _id: CURSO_ID, deleteOne: mockCursoInstance.deleteOne };
      mockFindByIdChain.populate.mockResolvedValue(curso);
      mockCursoInstance.deleteOne.mockRejectedValue(new Error('Delete error'));
      expect(await service.remove(CURSO_ID)).toBeNull();
    });

  });

});