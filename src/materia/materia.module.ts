import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';
import { CursoModule } from 'src/curso/curso.module';
import { Curso } from 'src/curso/entities/curso.entity';
import { Cursomateria } from 'src/cursomateria/entities/cursomateria.entity';
import { CursomateriaService } from 'src/cursomateria/cursomateria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Materia, Cursomateria, Curso]), CursoModule],
  controllers: [MateriaController],
  providers: [MateriaService, CursomateriaService],
})
export class MateriaModule {}
