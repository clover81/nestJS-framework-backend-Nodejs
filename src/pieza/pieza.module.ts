import { Module } from '@nestjs/common';
import { piezaController } from './pieza.controller';
import { piezaService } from './pieza.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [piezaController],
  providers: [piezaService, PrismaService],
})
export class piezaModule {}
