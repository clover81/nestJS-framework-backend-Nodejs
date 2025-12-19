import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, } from '@nestjs/common';
import { piezareparacionService } from './pieza-reparacion.service';
import { piezareparacionDto } from './pieza-reparacion.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@ApiTags('piezareparacion')
@UseGuards(AuthGuard)
@Controller('pieza-reparacion')
export class piezareparacionController {
  constructor(private service: piezareparacionService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get('/:piezaId/:reparacionId')
  getOne(
    @Param('piezaId') piezaId: string,
    @Param('reparacionId') reparacionId: string,
  ) {
    return this.service.getOne(piezaId, reparacionId);
  }

  @Post()
  @ApiBody({ type: piezareparacionDto })
  store(@Body() dto: piezareparacionDto) {
    return this.service.create(dto);
  }

  @Put('/:piezaId/:reparacionId')
  @ApiBody({ type: piezareparacionDto })
  update(
    @Param('piezaId') piezaId: string,
    @Param('reparacionId') reparacionId: string,
    @Body() dto: piezareparacionDto,
  ) {
    return this.service.update(piezaId, reparacionId, dto);
  }

  @Delete('/:piezaId/:reparacionId')
  destroy(
    @Param('piezaId') piezaId: string,
    @Param('reparacionId') reparacionId: string,
  ) {
    return this.service.delete(piezaId, reparacionId);
  }
}
