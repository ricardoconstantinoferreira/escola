import { IsInt, IsString } from "class-validator";

export class CreateAlunoDto {

    @IsInt()
    id: number;

    @IsString()
    nome: string;

    @IsString()
    profissao: string;

    @IsString()
    created_at: string;

    @IsString()
    updated_at: string;

    @IsInt()
    cursoId: number;
}
