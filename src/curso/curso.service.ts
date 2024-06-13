import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  findByIds(ids: any[]): Promise<Curso[]> {
    return this.cursoRepository.findBy(ids);
  }

  findOne(id: number): Promise<Curso | null> {
    return this.cursoRepository.findOneBy({id});
  }

  async update(id: number, updateCursoDto: UpdateCursoDto): Promise<Curso | null> {
    try {

      const curso = await this.findOne(id);

      if (curso.id == undefined) {
        throw new ForbiddenException();
      }

      await this.cursoRepository.update(id, updateCursoDto);
      return curso;

    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error updated curso',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  async remove(id: number): Promise<void> {
    await this.cursoRepository.delete(id);
  }
}
