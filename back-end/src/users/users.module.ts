import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { News } from 'src/news/models/news.model';
import { UsersNews } from 'src/shared/usersNews/users-news.model';
import { UsersNewsService } from 'src/shared/usersNews/users-news.service';
import { User } from './models/users.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, UsersNewsService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, UsersNews, News]),
    forwardRef(() => AuthModule)
  ],
  exports: [UsersService]
})
export class UsersModule {}
