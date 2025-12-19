import { IsString, IsNotEmpty, IsOptional, IsNumber, IsPositive, IsInt } from 'class-validator';

export class reparacionDto {
  @IsString()
  @IsNotEmpty()
  fecha: string; 

  @IsNumber()
  @IsPositive()
  coste: number;

  @IsInt()
  @IsPositive()
  vehiculoId: number;
}
