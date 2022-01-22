import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { News } from "src/news/models/news.model";
import { UsersNews } from "src/shared/usersNews/users-news.model";
import { Post } from "src/posts/models/post.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'aasipenka@gmail.com', description: 'User e-mail'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string;

  @ApiProperty({example: 'QwQ12345678_q', description: 'User password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string;

  @ApiProperty({example: 'Anton', description: 'User name'})
  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @ApiProperty({example: 'Asipenka', description: 'User second name'})
  @Column({type: DataType.STRING, allowNull: false})
  secondName: string;

  @BelongsToMany(() => News, () => UsersNews)
  news: News[];

  @HasMany(() => Post)
  posts: Post[];
}