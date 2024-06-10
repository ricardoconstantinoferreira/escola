import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {

  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>,
  ) {}

  create(createCursoDto: CreateCursoDto): Promise<Curso> {
    return this.cursoRepository.save(createCursoDto);
  }

  findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

  findOne(id: number): Promise<Curso | null> {
    return this.cursoRepository.findOneBy({id});
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  async remove(id: number): Promise<void> {
    await this.cursoRepository.delete(id);
  }
}
