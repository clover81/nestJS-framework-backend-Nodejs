import { Module } from '@nestjs/common';
import { vehiculoController } from './vehiculo.controller';
import { vehiculoService } from './vehiculo.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [vehiculoController],
  providers: [vehiculoService, PrismaService],
})
export class vehiculoModule {}
