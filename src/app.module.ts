import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursoModule } from './curso/curso.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoModule } from './aluno/aluno.module';
import { MateriaModule } from './materia/materia.module';
import { Curso } from './curso/entities/curso.entity';
import { Aluno } from './aluno/entities/aluno.entity';
import { Materia } from './materia/entities/materia.entity';
import { CursomateriaModule } from './cursomateria/cursomateria.module';
import { Cursomateria } from './cursomateria/entities/cursomateria.entity';

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
      entities: [Curso, Aluno, Materia, Cursomateria],
      // entities: [__dirname + '/../**/*.entity{.js,.ts}'],
      // entities: [__dirname + "/entity/*.ts"],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AlunoModule,
    MateriaModule,
    CursomateriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
