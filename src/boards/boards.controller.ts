import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() board: Prisma.BoardCreateInput) {
    return this.boardsService.create(board);
  }

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() board: Prisma.BoardUpdateInput) {
    return this.boardsService.update(+id, board);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.boardsService.delete(+id);
  }
}
