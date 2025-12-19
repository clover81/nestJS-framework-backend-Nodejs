import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { piezaModule } from './pieza/pieza.module';
import { reparacionModule } from './reparacion/reparacion.module';
import { vehiculoModule } from './vehiculo/vehiculo.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { piezareparacionModule } from './pieza-reparacion/pieza-reparacion.module';

@Module({
  imports: [
    AuthModule,
    UsuariosModule,
    piezaModule,
    reparacionModule,
    piezareparacionModule,
    vehiculoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
