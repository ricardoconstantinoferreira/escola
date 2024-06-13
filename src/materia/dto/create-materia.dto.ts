import { IsInt, IsString } from "class-validator";

export class CreateMateriaDto {

    @IsInt()
    id: number;

    @IsString()
    descricao: string;

    @IsInt()
    curso_id : number;
}
