import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUsuarioDto } from './usuarios.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUsuarioDto) {
    const hashed = await bcrypt.hash(data.password, 10);

    return this.prisma.usuario.create({
      data: {
        username: data.username,
        password: hashed,
      },
    });
  }

  async findByUsername(username: string) {
    return this.prisma.usuario.findUnique({
      where: { username },
    });
  }
}
