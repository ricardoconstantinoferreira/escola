import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';
import { CursoService } from 'src/curso/curso.service';

@Controller('aluno')
export class AlunoController {
  constructor(
    private readonly alunoService: AlunoService,
  ) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunoService.create(createAlunoDto);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) 
    id: number
  ) {
    return this.alunoService.findOne(id);
  }

  @Patch(':id')
  @UseFilters(new HttpExceptionFilter())
  update(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) 
    id: number, @Body() updateAlunoDto: UpdateAlunoDto
  ) {
    return this.alunoService.update(id, updateAlunoDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) 
    id: number
  ) {
    return this.alunoService.remove(id);
  }
}
