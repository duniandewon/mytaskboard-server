import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TaskService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTaskDto: Prisma.TaskCreateInput) {
    return this.databaseService.task.create({
      data: createTaskDto,
    });
  }

  async findAll(boardId: number) {
    return this.databaseService.task.findMany({ where: { boardId } });
  }

  async findOne(id: number) {
    return this.databaseService.task.findUnique({ where: { id } });
  }

  async update(id: number, updateTaskDto: Prisma.TaskUpdateInput) {
    return this.databaseService.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.task.delete({ where: { id } });
  }
}
