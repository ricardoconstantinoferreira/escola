import { CreateCursomateriaDto } from './dto/create-cursomateria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cursomateria } from './entities/cursomateria.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CursomateriaService {

  constructor(
    @InjectRepository(Cursomateria) private cursomateriaRepository: Repository<Cursomateria>,
  ) {}

  create(createCursomateriaDto: CreateCursomateriaDto) {
    return this.cursomateriaRepository.save(createCursomateriaDto);
  }

  async save(materia_id: number, curso_id: number): Promise<Cursomateria> {

    try {
        return await this.cursomateriaRepository.save({
          "materia_id" : materia_id,
          "curso_id" : curso_id
        });

    } catch (error) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'Error add relationship materia and curso',
        }, HttpStatus.FORBIDDEN, {
          cause: error
        });
    }
}
}
