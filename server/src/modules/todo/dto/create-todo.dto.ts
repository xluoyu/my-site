import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @ApiProperty({ description: '模块名称' })
  @IsNotEmpty({ message: '模块名称必填' })
  readonly title: string;

  @ApiProperty({ description: '模块内容' })
  readonly content?: string;
}
