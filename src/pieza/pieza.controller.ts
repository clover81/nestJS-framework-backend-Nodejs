import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards, } from '@nestjs/common';
import { piezaService } from './pieza.service';
import { piezaDto } from './pieza.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('piezas')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('piezas')
export class piezaController {
  constructor(private piezaService: piezaService) {}

  @Get()
  getAll() {
    return this.piezaService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.piezaService.getOne(id);
  }

  @Post()
  @ApiBody({ type: piezaDto })
  store(@Body() dto: piezaDto) {
    return this.piezaService.create(dto);
  }

  @Put('/:id')
  @ApiBody({ type: piezaDto })
  update(@Param('id') id: string, @Body() dto: piezaDto) {
    return this.piezaService.update(id, dto);
  }

  @Delete('/:id')
  destroy(@Param('id') id: string) {
    return this.piezaService.delete(id);
  }
}
