import { IsInt, IsPositive } from 'class-validator';

export class piezareparacionDto {
  @IsInt()
  @IsPositive()
  piezaId: number;

  @IsInt()
  @IsPositive()
  reparacionId: number;
}