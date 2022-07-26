import { IsNumber, IsOptional, Min } from 'class-validator';

export class PaginatorDto {
  @IsOptional()
  @IsNumber()
  offset?: number;

  @IsOptional()
  @Min(1)
  @IsNumber()
  limit?: number;
}
