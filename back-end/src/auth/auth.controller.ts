import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/users/dto/users.dto';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Log in by email and password'})
    @ApiResponse({status: 200, type: AuthUserDto})
    @Post('/login')
    public login(@Body() loginInfo: AuthUserDto) {
      return this.authService.loginUser(loginInfo);
    }

    @ApiOperation({summary: 'Registration with email and password'})
    @ApiResponse({status: 200, type: UserDto})
    @Post('/registration')
    public registration(@Body() registrationInfo: UserDto) {
      return this.authService.userRegistration(registrationInfo);
    }
}
