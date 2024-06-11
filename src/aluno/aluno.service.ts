import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { Repository } from 'typeorm';
import { CursoService } from 'src/curso/curso.service';

@Injectable()
export class AlunoService {

  constructor(
    @InjectRepository(Aluno) private alunoRepository: Repository<Aluno>,
    private cursoService: CursoService,
  ){}

  create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    return this.alunoRepository.save(createAlunoDto);
  }

  findAll(): Promise<Aluno[]> {
    return this.alunoRepository.find({
      relations: {curso: true}
    });
  }

  findOne(id: number): Promise<Aluno> {
    return this.alunoRepository.findOne({
      relations: {curso: true},
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<Aluno | void> {
    try {

      let aluno = await this.findOne(id);

      if (aluno.id == undefined) {
        throw new ForbiddenException();
      }

      const curso = await this.cursoService.findOne(aluno.curso.id);

      if (curso.id == undefined) {
        throw new ForbiddenException();
      }

      await this.alunoRepository.update(id, updateAlunoDto);
      return aluno;
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error updated aluno',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  async remove(id: number): Promise<void> {
    await this.alunoRepository.delete(id);
  }
}
