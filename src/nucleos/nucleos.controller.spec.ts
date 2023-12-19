import { Test, TestingModule } from '@nestjs/testing';
import { NucleosController } from './nucleos.controller';
import { NucleosService } from './nucleos.service';

describe('NucleosController', () => {
  let controller: NucleosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NucleosController],
      providers: [NucleosService],
    }).compile();

    controller = module.get<NucleosController>(NucleosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
