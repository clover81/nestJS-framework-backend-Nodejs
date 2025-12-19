import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, } from '@nestjs/common';
import { reparacionService } from './reparacion.service';
import { reparacionDto } from './reparacion.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@ApiTags('reparaciones')
@UseGuards(AuthGuard)
@Controller('reparaciones')
export class reparacionController {
  constructor(private reparacionService: reparacionService) {}

  @Get()
  getAll() {
    return this.reparacionService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.reparacionService.getOne(id);
  }

  @Post()
  @ApiBody({ type: reparacionDto })
  store(@Body() dto: reparacionDto) {
    return this.reparacionService.create(dto);
  }

  @Put('/:id')
  @ApiBody({ type: reparacionDto })
  update(@Param('id') id: string, @Body() dto: reparacionDto) {
    return this.reparacionService.update(id, dto);
  }

  @Delete('/:id')
  destroy(@Param('id') id: string) {
    return this.reparacionService.delete(id);
  }
}
