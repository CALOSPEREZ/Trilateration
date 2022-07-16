import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { handleResponse } from 'src/common/response';
import { ValidateTrilaterationDto } from './dto/validation.dto';

@Controller('trilateration')
export class TrilaterationController {
  @Post()
  public async create(
    @Body() custommerDto: ValidateTrilaterationDto,
    @Res() res,
  ): Promise<{ message: string; data: any }> {
    // const data = await this.custommerService.create(custommerDto);
    return handleResponse(res, HttpStatus.CREATED, 'ok', 'data');
  }
}
