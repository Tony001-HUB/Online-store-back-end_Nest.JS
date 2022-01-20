import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersNewsDto } from 'src/shared/usersNews/dto/userNews.dto';
import { UsersNews } from 'src/shared/usersNews/users-news.model';
import { UsersNewsService } from 'src/shared/usersNews/users-news.service';
import { UserDto } from './dto/users.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService, private usersNewsService: UsersNewsService) {}

    @ApiOperation({summary: 'User creation'})
    @ApiResponse({status: 200, type: User})
    @Post()
    createUser(@Body() userDto: UserDto) {
      return this.usersService.createUsers(userDto);
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getUsers() {
      return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Get user by email'})
    @ApiResponse({status: 200, type: User})
    @Get('/:email')
    getUserByEmail(@Param('email') email: string) {
      return this.usersService.getUserByEmail(email);
    }

    @ApiOperation({summary: 'Add news for the user'})
    @ApiResponse({status: 200, type: UsersNews})
    @Post('/addNewsToUser')
    public async addNewsToUser(@Body() usersNewsDto: UsersNewsDto) {
      const user = await this.usersService.getUserByEmail(usersNewsDto.email);
      return this.usersNewsService.addNewsToUser(usersNewsDto, user.id);
    }

    @ApiOperation({summary: 'Get all news from user collection'})
    @ApiResponse({status: 200, type: User})
    @Post('/myNew')
    public getAllUserNews(@Body() usersNewsDto: UsersNewsDto) {
      return this.usersNewsService.getAllUserNews(usersNewsDto);
    }

    @ApiOperation({summary: 'Delete news from user collection'})
    @ApiResponse({status: 200, type: UsersNews})
    @Delete('/deleteMyNew/:newsId')
    public deleteNewsFromUser(@Param('newsId') newsId: string) {
      return this.usersNewsService.deleteNewsFromUser(+newsId);
    }
}
