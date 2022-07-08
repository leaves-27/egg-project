import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

@EntityModel()
export class UserEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '用户的自增ID',
  })
  id: number;

  @Column('varchar', {
    name: 'username',
    comment: '用户名',
    length: 64,
  })
  userName: string;

  @Column('varchar', {
    name: 'password',
    nullable: true,
    comment: '用户密码',
    length: 64,
  })
  password: string | null;

  @Column({
    name: 'deleted',
    nullable: true,
    comment: '是否删除',
  })
  deleted: boolean;
}