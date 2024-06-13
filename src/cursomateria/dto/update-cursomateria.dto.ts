import { PartialType } from '@nestjs/mapped-types';
import { CreateCursomateriaDto } from './create-cursomateria.dto';

export class UpdateCursomateriaDto extends PartialType(CreateCursomateriaDto) {}
