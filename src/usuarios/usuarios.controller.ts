import { Body, Controller, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Post('register')
  register(@Body() dto: CreateUsuarioDto) {
    return this.usuariosService.create(dto);
  }
}
