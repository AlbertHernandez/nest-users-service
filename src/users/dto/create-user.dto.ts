import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsString({ each: true })
  readonly favoriteColors: string[];
}
