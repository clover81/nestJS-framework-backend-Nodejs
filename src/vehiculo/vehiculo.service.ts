import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { vehiculoDto } from './vehiculo.dto';

@Injectable()
export class vehiculoService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const todos = await this.prisma.vehiculo.findMany();
    return { respuesta: todos };
  }

  async getOne(id: string) {
    const idNum = parseInt(id, 10);
    const uno = await this.prisma.vehiculo.findUnique({ where: { id: idNum } });
    if (!uno) return { respuesta: `vehiculo con id ${id} no encontrado` };
    return { respuesta: uno };
  }

  async create(dto: vehiculoDto) {
    await this.prisma.vehiculo.create({ data: dto });
    return { respuesta: 'vehiculo creado con éxito' };
  }

  async update(id: string, dto: vehiculoDto) {
    try {
      const idNum = parseInt(id, 10);
      await this.prisma.vehiculo.update({ where: { id: idNum }, data: dto });
      return { respuesta: 'vehiculo actualizado con éxito' };
    } catch (error) {
      return { respuesta: `vehiculo con id ${id} no encontrado` };
    }
  }

  async delete(id: string) {
    try {
      const idNum = parseInt(id, 10);
      await this.prisma.vehiculo.delete({ where: { id: idNum } });
      return { respuesta: 'vehiculo eliminado con éxito' };
    } catch (error) {
      return { respuesta: `vehiculo con id ${id} no encontrado` };
    }
  }
}
