import { IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsPositive()
  @Min(1)
  no: number;

  @IsString()
  @MinLength(1)
  name: string;
}
