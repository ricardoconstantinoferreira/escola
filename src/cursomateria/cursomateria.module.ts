import { Module } from '@nestjs/common';
import { CursomateriaService } from './cursomateria.service';
import { CursomateriaController } from './cursomateria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from 'src/materia/entities/materia.entity';
import { Curso } from 'src/curso/entities/curso.entity';
import { Cursomateria } from './entities/cursomateria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Materia, Cursomateria, Curso])],
  controllers: [CursomateriaController],
  providers: [CursomateriaService],
})
export class CursomateriaModule {}
