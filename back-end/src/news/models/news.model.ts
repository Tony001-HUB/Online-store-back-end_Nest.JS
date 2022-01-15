import {  Column, DataType, Model, Table } from "sequelize-typescript";

interface INewsCreationAttrs {
    title: string;
    country: string;
    link: string;
}

@Table({tableName: 'news'})
export class News extends Model<News, INewsCreationAttrs> {
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    country: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    link: string;
}
   