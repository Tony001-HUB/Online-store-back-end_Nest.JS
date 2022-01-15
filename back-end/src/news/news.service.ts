import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { NewsDto } from './dto/news.dto';
import { News } from './models/news.model';

@Injectable()
export class NewsService {
    constructor(@InjectModel(News) private newsRepository: typeof News) {}

    public async createNews(news: NewsDto) {
        console.log(news);
        return await this.newsRepository.create(news);
    }

    public async getAllNews() {
        return await this.newsRepository.findAll();
    }

    public async getNewsByTitle(title: string) {
        return await this.newsRepository.findOne({where: {title}, include: {all: true}});
    }
}
