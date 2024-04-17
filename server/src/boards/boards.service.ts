import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BoardsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createBoardDto: Prisma.BoardCreateInput) {
    return this.databaseService.board.create({
      data: createBoardDto,
    });
  }

  async findAll() {
    return this.databaseService.board.findMany();
  }

  findOne(id: number) {
    return this.databaseService.board.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateBoardDto: Prisma.BoardUpdateInput) {
    return this.databaseService.board.update({
      where: { id },
      data: updateBoardDto,
    });
  }

  delete(id: number) {
    return this.databaseService.board.delete({ where: { id } });
  }
}
