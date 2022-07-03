import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} user`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} user`;
  }
}
