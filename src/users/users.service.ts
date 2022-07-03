import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'Albert',
      age: 12,
      favoriteColors: ['blue', 'red'],
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((item) => item.id === id);
  }

  create(createUserDto: any) {
    this.users.push(createUserDto);
  }

  update(id: string, updateUserDto: any) {
    const existingUser = this.findOne(id);
    if (existingUser) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((item) => item.id === id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
  }
}
