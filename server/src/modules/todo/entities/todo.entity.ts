import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'char',
    length: 20,
    comment: '文章标题',
  })
  title: string;

  @Column({
    type: 'varchar',
    default: '',
    comment: '文章内容',
  })
  content: string;

  @Column({
    type: 'timestamp',
    name: 'create_time',
    comment: '创建时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column({
    type: 'timestamp',
    name: 'update_time',
    comment: '修改时间',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;

  @Column({
    type: 'int',
    name: 'user_id',
    comment: '创建者ID',
    nullable: false,
  })
  userId: number;
}
