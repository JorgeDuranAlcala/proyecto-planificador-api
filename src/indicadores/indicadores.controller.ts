import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IndicadoresService } from './indicadores.service';
import { CreateIndicadoreDto } from './dto/create-indicadore.dto';
import { UpdateIndicadoreDto } from './dto/update-indicadore.dto';
import { InsertarValorIndicadorDto } from './dto/insertar-valorIndicador';

@Controller('indicadores')
export class IndicadoresController {
  constructor(private readonly indicadoresService: IndicadoresService) {}

  @Post()
  create(@Body() createIndicadoreDto: CreateIndicadoreDto) {
    return this.indicadoresService.create(createIndicadoreDto);
  }

  @Post('insertarValorIndicador')
  insertarValorIndicador(
    @Body() insertarValorIndicadorDto: InsertarValorIndicadorDto,
  ) {
    return this.indicadoresService.insertarValorIndicador(
      insertarValorIndicadorDto,
    );
    /*     return {
      data: insertarValorIndicadorDto,
    }; */
  }

  @Get()
  findAll() {
    return this.indicadoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.indicadoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIndicadoreDto: UpdateIndicadoreDto,
  ) {
    return this.indicadoresService.update(+id, updateIndicadoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.indicadoresService.remove(+id);
  }
}
