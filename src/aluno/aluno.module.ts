import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoModule } from 'src/curso/curso.module';
import { Aluno } from './entities/aluno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno]), CursoModule],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule {}
