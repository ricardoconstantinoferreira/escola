import { Aluno } from "src/aluno/entities/aluno.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToMany(
        () => Materia, 
        materia => materia.curso,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    materia: Materia[];
}
