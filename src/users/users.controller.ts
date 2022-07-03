import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return 'Hello world';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} user`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
