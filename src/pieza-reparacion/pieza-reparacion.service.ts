import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { piezareparacionDto } from './pieza-reparacion.dto';

@Injectable()
export class piezareparacionService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const todos = await this.prisma.piezaReparacion.findMany();
    return { respuesta: todos };
  }

  async getOne(piezaId: string, reparacionId: string) {
    const aId = parseInt(piezaId, 10);
    const bId = parseInt(reparacionId, 10);

    const uno = await this.prisma.piezaReparacion.findUnique({
      where: { piezaId_reparacionId: { piezaId: aId, reparacionId: bId } },
    });

    if (!uno) {
      return { respuesta: `Relación ${piezaId}-${reparacionId} no encontrada` };
    }
    return { respuesta: uno };
  }

  async create(dto: piezareparacionDto) {
    await this.prisma.piezaReparacion.create({ data: dto });
    return { respuesta: 'Relación creada con éxito' };
  }

  async update(piezaId: string, reparacionId: string, dto: piezareparacionDto) {
    const aId = parseInt(piezaId, 10);
    const bId = parseInt(reparacionId, 10);

    await this.prisma.piezaReparacion.update({
      where: { piezaId_reparacionId: { piezaId: aId, reparacionId: bId } },
      data: dto,
    });

    return { respuesta: 'Relación actualizada con éxito' };
  }

  async delete(piezaId: string, reparacionId: string) {
    const aId = parseInt(piezaId, 10);
    const bId = parseInt(reparacionId, 10);

    await this.prisma.piezaReparacion.delete({
      where: { piezaId_reparacionId: { piezaId: aId, reparacionId: bId } },
    });

    return { respuesta: 'Relación eliminada con éxito' };
  }
}
