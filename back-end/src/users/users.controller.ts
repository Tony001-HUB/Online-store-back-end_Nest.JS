import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/users.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

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

}
