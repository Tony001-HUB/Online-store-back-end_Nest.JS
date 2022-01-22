import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersNewsDto } from './dto/userNews.dto';
import { UsersNews } from './users-news.model';

@Injectable()
export class UsersNewsService {

    constructor(@InjectModel(UsersNews) private userNewsRepository: typeof UsersNews) {}

    public async addNewsToUser(userNews: UsersNewsDto, id: number) {
        return await this.userNewsRepository.create({newsId: userNews.newsId, userId: id});
    } 

    public async getAllUserNews(user: UsersNewsDto) {
        return await this.userNewsRepository.findAll({where: {userId: user.userId}, include: {all: true}});
    } 

    public async deleteNewsFromUser(id: number) {
        return await this.userNewsRepository.destroy({where: {newsId: id}});
    }

}
