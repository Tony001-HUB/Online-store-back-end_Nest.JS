import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserDto } from './dto/users.dto';
import { User } from './models/users.model';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User) {}

  public async createUsers(newUser: UserDto) {
      return await this.userRepository.create(newUser);
  }

  public async getAllUsers() {
      return await this.userRepository.findAll({include: {all: true}});
    }
  
  public async getUserByEmail(email: string) {
    return await this.userRepository.findOne({where: {email}, include: {all: true}})
  }

}
