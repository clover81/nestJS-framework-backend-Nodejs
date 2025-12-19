import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { piezaDto } from './pieza.dto';

@Injectable()
export class piezaService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const todos = await this.prisma.pieza.findMany();
    return { respuesta: todos };
  }

  async getOne(id: string) {
    const idUno = parseInt(id, 10); // las buenas prácticas de uso de Nest recomienda el uso en base decimal diez para evitar problemas.
    const uno = await this.prisma.pieza.findUnique({ where: { id: idUno } });
    if (!uno) return { respuesta: `pieza con id ${id} no encontrada` };
    return { respuesta: uno };
  }

  async create(dto: piezaDto) {
    await this.prisma.pieza.create({ data: dto });
    return { respuesta: 'pieza creada con éxito' };
  }

  async update(id: string, dto: piezaDto) {
    try {
      const idUno = parseInt(id, 10);
      await this.prisma.pieza.update({ where: { id: idUno }, data: dto });
      return { respuesta: 'pieza actualizada con éxito' };
    } catch (error) {
      return { respuesta: `pieza con id ${id} no encontrada` };
    }
  }

  async delete(id: string) {
    try {
      const idUno = parseInt(id, 10);
      await this.prisma.pieza.delete({ where: { id: idUno } });
      return { respuesta: 'pieza eliminada con éxito' };
    } catch (error) {
      return { respuesta: `pieza con id ${id} no encontrada` };
    }
  }
}
