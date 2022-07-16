import { Test, TestingModule } from '@nestjs/testing';
import { TrilaterationController } from './trilateration.controller';

describe('TrilaterationController', () => {
  let controller: TrilaterationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrilaterationController],
    }).compile();

    controller = module.get<TrilaterationController>(TrilaterationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
