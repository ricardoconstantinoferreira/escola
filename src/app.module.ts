import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './curso/entities/curso.entity';
import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { MateriaModule } from './materia/materia.module';
import { Aluno } from './aluno/entities/aluno.entity';

@Module({
  imports: [
    CursoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'magento30',
      database: 'escola',
      entities: [Curso, Aluno],
      synchronize: true,
    }),
    AlunoModule,
    ProfessorModule,
    MateriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
