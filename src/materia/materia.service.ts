import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MateriaService {

  /**
   * Constructor to dependency inject materiaRepository
   * @param materiaRepository 
   */
  constructor(
    @InjectRepository(Materia) private materiaRepository: Repository<Materia>,
  ) {}

  /**
   * Create materia registers
   * @param createMateriaDto 
   * @returns 
   */
  async create(createMateriaDto: CreateMateriaDto): Promise<Materia> {
    return await this.materiaRepository.save(createMateriaDto);
  }

  findAll(): Promise<Materia> {
    return this.materiaRepository.findOne({
      relations: {curso: true}
    });
  }

  findByIds(id: any[]): Promise<Materia[]> {
    return this.materiaRepository.findBy(id);
  }

  async findOne(id: number): Promise<Materia | null> {
    return await this.materiaRepository.findOneBy({id});
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }

  remove(id: number) {
    return `This action removes a #${id} materia`;
  }
}
