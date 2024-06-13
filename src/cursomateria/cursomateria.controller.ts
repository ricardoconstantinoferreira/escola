import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursomateriaService } from './cursomateria.service';
import { CreateCursomateriaDto } from './dto/create-cursomateria.dto';
import { UpdateCursomateriaDto } from './dto/update-cursomateria.dto';

@Controller('cursomateria')
export class CursomateriaController {
  constructor(private readonly cursomateriaService: CursomateriaService) {}

  @Post()
  create(@Body() createCursomateriaDto: CreateCursomateriaDto) {
    return this.cursomateriaService.create(createCursomateriaDto);
  }

  @Get()
  findAll() {
    return 'implementing';
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return 'implementing';
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCursomateriaDto: UpdateCursomateriaDto) {
    return 'implementing';
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return 'implementing';
  }
}
