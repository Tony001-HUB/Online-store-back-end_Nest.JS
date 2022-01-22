import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersNews } from 'src/shared/usersNews/users-news.model';
import { User } from 'src/users/models/users.model';
import { News } from './models/news.model';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
    controllers: [NewsController],
    providers: [NewsService],
    imports: [
        SequelizeModule.forFeature([News, UsersNews, User])
    ],
    exports: []
})

export class NewsModule {}
