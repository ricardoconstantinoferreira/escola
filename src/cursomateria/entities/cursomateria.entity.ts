import { Curso } from "src/curso/entities/curso.entity";
import { Materia } from "src/materia/entities/materia.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("materia_curso")
export class Cursomateria {
    @PrimaryColumn({ name: 'materia_id' })
    materia_id: number;

    @PrimaryColumn({ name: 'curso_id'})
    curso_id: number;

    @ManyToOne(
        () => Materia,
        materia => materia.curso,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    @JoinColumn([{ name: 'materia_id', referencedColumnName: 'id' }])
    materia: Materia[];

    @ManyToOne(
        () => Curso,
        curso => curso.materia,
        {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
    )
    @JoinColumn([{ name: 'curso_id', referencedColumnName: 'id' }])
    curso: Curso[];
}
