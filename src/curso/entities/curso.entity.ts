import { Aluno } from "src/aluno/entities/aluno.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    descricao: string;

    @Column('decimal', {precision: 10, scale: 2})
    preco: number;

    @OneToMany(() => Aluno, (aluno) => aluno.curso, { cascade: ['insert', 'update'] })
    aluno: Aluno[];
}
