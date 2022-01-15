import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NewsDto } from './dto/news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) {}

    @Post()
    public createNews(@Body() newsDto: NewsDto) {
        return this.newsService.createNews(newsDto);
    }

    @Get()
    public getAllNews() {
      return this.newsService.getAllNews();
    }

    @Get('/:value')
    public getNewsByTitle(@Param('title') title: string) {
      return this.newsService.getNewsByTitle(title);
    }
}
