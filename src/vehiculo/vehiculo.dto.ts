import { IsString, IsNotEmpty } from 'class-validator';

export class vehiculoDto {
  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;
}
