import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UseFilters } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) 
    id: number
  ) {
    return this.cursoService.findOne(id);
  }

  @Patch(':id')
  @UseFilters(new HttpExceptionFilter())
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) 
    id: number, @Body() updateCursoDto: UpdateCursoDto
  ) {
    return this.cursoService.update(id, updateCursoDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) 
    id: number) {
    return this.cursoService.remove(id);
  }
}
