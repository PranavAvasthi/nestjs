import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(title: string) {
    return this.prisma.todo.create({
      data: {
        title,
      },
    });
  }
}
