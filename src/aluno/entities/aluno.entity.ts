import { Curso } from "src/curso/entities/curso.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aluno {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    profissao: string;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;

    @ManyToOne(() => Curso)
    @JoinColumn({name: "curso_id"})
    curso: Curso;
}
