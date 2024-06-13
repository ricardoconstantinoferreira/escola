import { Curso } from "src/curso/entities/curso.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materia {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @ManyToMany(() => Curso)
    @JoinTable(
        {
            name: "materia_curso",
            joinColumn: {
                name: "materia_id",
                referencedColumnName: "id"
            },
            inverseJoinColumn: {
                name: "curso_id",
                referencedColumnName: "id"
            }
        }
    )
    curso: Curso[];
}