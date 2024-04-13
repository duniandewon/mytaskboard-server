import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';

import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsService.findOne(id);
  }

  @Post()
  create(@Body() board: CreateBoardDto) {
    return this.boardsService.create(board);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() board: UpdateBoardDto) {
    return this.boardsService.update(id, board);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.boardsService.delete(id);
  }
}
