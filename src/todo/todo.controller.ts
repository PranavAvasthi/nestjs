import { Controller, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body('title') title: string) {
    return this.todoService.create(title);
  }
}
