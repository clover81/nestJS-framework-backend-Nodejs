import { Module } from '@nestjs/common';
import { reparacionController } from './reparacion.controller';
import { reparacionService } from './reparacion.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [reparacionController],
  providers: [reparacionService, PrismaService],
})
export class reparacionModule {}
