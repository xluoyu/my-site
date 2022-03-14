import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'char',
    length: 10,
    comment: '标签名',
  })
  name: string;
}
