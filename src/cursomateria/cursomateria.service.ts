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

  /**
   * Create association between materia and curso
   * @param createCursomateriaDto 
   * @returns 
   */
  async create(createCursomateriaDto: CreateCursomateriaDto) {
    
    let res = await this.findByCursoMateriaId(createCursomateriaDto.curso_id, createCursomateriaDto.materia_id);

    if (res) {
      throw new HttpException('This registers already!', HttpStatus.FORBIDDEN);
    }

    return this.cursomateriaRepository.save(createCursomateriaDto);
  }

  /**
   * Check whether have curso_id with materia_id in association
   * @param curso_id 
   * @param materia_id 
   * @returns 
   */
  async findByCursoMateriaId(curso_id: number, materia_id: number): Promise<boolean> {

    let result = await this.cursomateriaRepository.find({
      where: [
        {curso_id: curso_id, materia_id: materia_id}
      ]
    });

    return result.length > 0;
  }
}
