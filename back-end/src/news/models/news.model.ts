import { ApiProperty } from "@nestjs/swagger";
import {  BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { UserNews } from "src/shared/user-news.model";
import { User } from "src/users/models/users.model";

interface INewsCreationAttrs {
    title: string;
    country: string;
    link: string;
}

@Table({tableName: 'news'})
export class News extends Model<News, INewsCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Минск на фото из БССР и девяностых...', description: 'Описание новсти.'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'Беларусь', description: 'Страна связанная с новостью'})
    @Column({type: DataType.STRING, allowNull: false})
    country: string;

    @ApiProperty({example: 'https:/news-example.com', description: 'Ссылка на первоисточник.'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    link: string;

    @BelongsToMany(() => User, () => UserNews)
    users: User[];
}
   