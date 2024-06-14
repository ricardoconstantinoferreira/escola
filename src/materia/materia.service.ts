import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { Repository, createQueryBuilder } from 'typeorm';

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

  /**
   * Get all materias
   * @returns 
   */
  async findAll(): Promise<Materia[]> {
    return await this.materiaRepository.createQueryBuilder("materia")
      .innerJoinAndSelect("materia.curso", "curso")
      .getRawMany();
  }

  /**
   * Get the courses of materia
   * @param id 
   * @returns 
   */
  async findOne(id: number): Promise<Materia[]> {
    return await this.materiaRepository.createQueryBuilder("materia")
      .innerJoinAndSelect("materia.curso", "curso")
      .where("materia.id = :id", {id: id})
      .getRawMany()
  }

  update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return `This action updates a #${id} materia`;
  }

  remove(id: number) {
    return `This action removes a #${id} materia`;
  }
}
