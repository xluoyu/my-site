import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}
  // 创建
  async create(post: CreateTodoDto) {
    const newTodo = {
      ...post,
      createTime: new Date(),
      updateTime: new Date(),
      userId: 1,
    };
    return await this.todoRepository.save(newTodo);
  }

  async findAll() {
    const qb = await getRepository(Todo).createQueryBuilder('todo');
    qb.orderBy('todo.create_time', 'DESC');

    const count = await qb.getCount();

    const posts = await qb.getMany();

    return { list: posts, count: count };
  }

  async findOne(id: number) {
    const todo = await this.todoRepository.findOne(id);
    if (todo) {
      return todo;
    } else {
      throw new HttpException(`id为${id}的文章不存在`, 401);
    }
  }
  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const qb = await getRepository(Todo).createQueryBuilder('todo');
    qb.update(updateTodoDto)
      .set({ title: updateTodoDto.title, content: updateTodoDto.content })
      .where('id = :id', { id })
      .execute();

    return { msg: '修改成功' };
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
