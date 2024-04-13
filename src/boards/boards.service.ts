import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateBoardDto } from './dto/update-board.dto';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards = [
    {
      id: 'board-1',
      name: 'My Task Board',
      desctiption: 'Task to keep organized',
    },
  ];

  findAll() {
    return this.boards;
  }

  findOne(id: string) {
    const board = this.boards.find((board) => board.id === id);

    if (!board) throw new NotFoundException('Board Not Found');

    return board;
  }

  create(board: CreateBoardDto) {
    this.boards.push({ id: '1', ...board });

    return board;
  }

  update(id: string, updatedBoard: UpdateBoardDto) {
    this.boards = this.boards.map((board) => {
      if (board.id === id) {
        return { ...board, ...updatedBoard };
      }

      return board;
    });

    return this.findOne(id);
  }

  delete(id: string) {
    const removedBoard = this.findOne(id);

    this.boards = this.boards.filter((board) => board.id !== id);

    return removedBoard;
  }
}
