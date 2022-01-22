import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { News } from './news/models/news.model';
import { User } from './users/models/users.model';
import { UsersNews } from './shared/usersNews/users-news.model';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { Post } from './posts/models/post.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [User, News, UsersNews, Post],
      autoLoadModels: true,
      dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     }
    }),
    NewsModule,
    UsersModule,
    AuthModule,
    PostsModule,
    FilesModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}


/*
SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [User, News, UsersNews],
      autoLoadModels: true,
      dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     }
    }),
SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'QwQ12345_q',
      database: 'online-shope',
      models: [User, News, UsersNews, Post],
      autoLoadModels: true
    }),    
*/
