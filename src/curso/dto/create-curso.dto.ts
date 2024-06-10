import { IsDecimal, IsInt, IsString } from "class-validator";

export class CreateCursoDto {
    @IsInt()
    id: number;

    @IsString()
    descricao: string;

    @IsDecimal()
    preco: number;
}
