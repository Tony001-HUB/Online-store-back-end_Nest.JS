import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { News } from "src/news/models/news.model";
import { User } from "src/users/models/users.model";

interface IUsersNews {
    userId: number;
    newsId: number;
}

@Table({tableName: 'user_news', createdAt: false, updatedAt: false})
export class UsersNews extends Model<UsersNews, IUsersNews> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: '1', description: 'id of news'})
    @ForeignKey(() => News)
    @Column({type: DataType.NUMBER})
    newsId: number;

    @ApiProperty({example: '5', description: 'id of user'})
    @ForeignKey(() => User)
    @Column({type: DataType.NUMBER})
    userId: number;
} 