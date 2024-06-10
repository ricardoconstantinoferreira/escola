import { Column, Decimal128, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    descricao: string;

    @Column('decimal', {precision: 10, scale: 2})
    preco: number;
}
