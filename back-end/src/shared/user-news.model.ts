import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { News } from "src/news/models/news.model";
import { User } from "src/users/models/users.model";

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserNews extends Model<UserNews> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => News)
    @Column({type: DataType.NUMBER})
    newsId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.NUMBER})
    userId: number;
} 