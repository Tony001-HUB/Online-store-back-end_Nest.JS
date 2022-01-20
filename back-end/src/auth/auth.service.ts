import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthUserDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/models/users.model';
import { UserDto } from 'src/users/dto/users.dto';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    public async loginUser(authUserDto: AuthUserDto) {
        let user = await this.validateUserData(authUserDto);
        return this.generateToken(user);
    }

    public async userRegistration(authUserDto: UserDto) {
        const candidate = await this.usersService.getUserByEmail(authUserDto.email);
        if (candidate) {
          throw new HttpException('This user already exists', HttpStatus.BAD_REQUEST);
        } else {
            const hashPassword = await bcrypt.hash(authUserDto.password, 5);
            const user = await this.usersService.createUsers(
                {
                    email: authUserDto.email, 
                    password: hashPassword,
                    name: authUserDto.name,
                    secondName: authUserDto.secondName
                }
                );
            return this.generateToken(user);
        }
    }

    private async generateToken(user: User) {
        const payload = { email: user.email, id: user.id }
        return { token: this.jwtService.sign(payload) }
    }  
    private async validateUserData(authUserDto: AuthUserDto) {   
        const user = await this.usersService.getUserByEmail(authUserDto.email);
        const passwordsIsEqual = await bcrypt.compare(authUserDto.password, user.password);
        if (user && passwordsIsEqual) {
          return user;
        } else {
            throw new UnauthorizedException({message: 'Invalid email or password'});
        }
    }
}
