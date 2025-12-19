import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class piezaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  
  @IsNumber()
  @IsPositive()
  coste: number;
}
