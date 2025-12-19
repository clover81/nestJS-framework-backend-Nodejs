import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { reparacionDto } from './reparacion.dto';

@Injectable()
export class reparacionService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const todos = await this.prisma.reparacion.findMany();
    return { respuesta: todos };
  }

  async getOne(id: string) {
    const idNum = parseInt(id, 10);
    const uno = await this.prisma.reparacion.findUnique({ where: { id: idNum } });
    if (!uno) return { respuesta: `reparacion con id ${id} no encontrada` };
    return { respuesta: uno };
  }

  async create(dto: reparacionDto) {
    await this.prisma.reparacion.create({ data: dto });
    return { respuesta: 'reparacion creada con éxito' };
  }

  async update(id: string, dto: reparacionDto) {
    try {
      const idNum = parseInt(id, 10);
      await this.prisma.reparacion.update({ where: { id: idNum }, data: dto });
      return { respuesta: 'reparacion actualizada con éxito' };
    } catch (error) {
      return { respuesta: `reparacion con id ${id} no encontrada` };
    }
  }

  async delete(id: string) {
    try {
      const idNum = parseInt(id, 10);
      await this.prisma.reparacion.delete({ where: { id: idNum } });
      return { respuesta: 'reparacion eliminada con éxito' };
    } catch (error) {
      return { respuesta: `reparacion con id ${id} no encontrada` };
    }
  }
}
