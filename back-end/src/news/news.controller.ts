import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NewsDto } from './dto/news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) {}

    @Post()
    public createNews(@Body() newsDto: NewsDto) {
        console.log(newsDto);
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

    @Delete('/:id')
    public deleteNews(@Param('id') id: string) {
      return this.newsService.deleteNewsById(+id);
    }
}
