import { IsInt } from "class-validator";

export class CreateCursomateriaDto {
    @IsInt()
    materia_id: number;

    @IsInt()
    curso_id : number;
}
