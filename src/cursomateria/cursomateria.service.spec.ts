import { Test, TestingModule } from '@nestjs/testing';
import { CursomateriaService } from './cursomateria.service';

describe('CursomateriaService', () => {
  let service: CursomateriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursomateriaService],
    }).compile();

    service = module.get<CursomateriaService>(CursomateriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
