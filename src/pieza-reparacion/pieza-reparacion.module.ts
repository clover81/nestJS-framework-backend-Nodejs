import { Module } from '@nestjs/common';
import { piezareparacionController } from './pieza-reparacion.controller';
import { piezareparacionService } from './pieza-reparacion.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [piezareparacionController],
  providers: [piezareparacionService, PrismaService],
})
export class piezareparacionModule {}
