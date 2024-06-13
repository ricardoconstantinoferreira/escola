import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { CursomateriaService } from 'src/cursomateria/cursomateria.service';

@Controller('materia')
export class MateriaController {
  constructor(
    private readonly materiaService: MateriaService,
    private readonly cursomateriaService: CursomateriaService,
  ) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createMateriaDto: CreateMateriaDto) {
    return await this.materiaService.create(createMateriaDto);
  }

  @Get()
  findAll() {
    return this.materiaService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) 
    id: number
  ) {
    return this.materiaService.findOne(id);
  }

  @Patch(':id')
  @UseFilters(new HttpExceptionFilter())
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))  
    id: number, @Body() updateMateriaDto: UpdateMateriaDto
  ) {
    return this.materiaService.update(id, updateMateriaDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) 
    id: number
  ) {
    return this.materiaService.remove(id);
  }
}
