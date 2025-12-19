import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, } from '@nestjs/common';
import { vehiculoService } from './vehiculo.service';
import { vehiculoDto } from './vehiculo.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@ApiTags('vehiculos')
@UseGuards(AuthGuard)
@Controller('vehiculos')
export class vehiculoController {
  constructor(private vehiculoService: vehiculoService) {}

  @Get()
  getAll() {
    return this.vehiculoService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.vehiculoService.getOne(id);
  }

  @Post()
  @ApiBody({ type: vehiculoDto })
  store(@Body() dto: vehiculoDto) {
    return this.vehiculoService.create(dto);
  }

  @Put('/:id')
  @ApiBody({ type: vehiculoDto })
  update(@Param('id') id: string, @Body() dto: vehiculoDto) {
    return this.vehiculoService.update(id, dto);
  }

  @Delete('/:id')
  destroy(@Param('id') id: string) {
    return this.vehiculoService.delete(id);
  }
}
