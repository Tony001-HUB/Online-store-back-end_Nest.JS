import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NewsDto } from './dto/news.dto';
import { News } from './models/news.model';
import { NewsService } from './news.service';

@ApiTags('News')
@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) {}

    @ApiOperation({summary: 'News creation'})
    @ApiResponse({status: 200, type: News})
    @Post()
    public createNews(@Body() newsDto: NewsDto) {
        console.log(newsDto);
        return this.newsService.createNews(newsDto);
    }

    @ApiOperation({summary: 'Get all news'})
    @ApiResponse({status: 200, type: [News]})
    @Get()
    public getAllNews() {
      return this.newsService.getAllNews();
    }

    @ApiOperation({summary: 'Get news by title'})
    @ApiResponse({status: 200, type: News})
    @Get('/:value')
    public getNewsByTitle(@Param('title') title: string) {
      return this.newsService.getNewsByTitle(title);
    }

    @ApiOperation({summary: 'Delete news by id'})
    @ApiResponse({status: 200, type: News})
    @Delete('/:id')
    public deleteNews(@Param('id') id: string) {
      return this.newsService.deleteNewsById(+id);
    }
}
