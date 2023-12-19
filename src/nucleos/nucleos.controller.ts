import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NucleosService } from './nucleos.service';
import { CreateNucleoDto } from './dto/create-nucleo.dto';
import { UpdateNucleoDto } from './dto/update-nucleo.dto';

@Controller('nucleos')
export class NucleosController {
  constructor(private readonly nucleosService: NucleosService) {}

  @Post()
  create(@Body() createNucleoDto: CreateNucleoDto) {
    return this.nucleosService.create(createNucleoDto);
  }

  @Get()
  findAll() {
    return this.nucleosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nucleosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNucleoDto: UpdateNucleoDto) {
    return this.nucleosService.update(+id, updateNucleoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nucleosService.remove(+id);
  }
}
