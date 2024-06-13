import { Test, TestingModule } from '@nestjs/testing';
import { CursomateriaController } from './cursomateria.controller';
import { CursomateriaService } from './cursomateria.service';

describe('CursomateriaController', () => {
  let controller: CursomateriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursomateriaController],
      providers: [CursomateriaService],
    }).compile();

    controller = module.get<CursomateriaController>(CursomateriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
