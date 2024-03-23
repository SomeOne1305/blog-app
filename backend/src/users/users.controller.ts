import {
  Controller,
  Get,
  Res,
  Post,
  Put,
  Delete,
  UseGuards,
  Req,
  Body,
  UsePipes,
  HttpCode,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from './user.guard';
import { EmailDto, UserDto } from './dto/user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @HttpCode(200)
  @Get('/all')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @HttpCode(200)
  @Get('user')
  @UseGuards(AuthGuard)
  async getSpecUser(@Req() req) {
    const userId: string = req.user.userId;
    return this.userService.getUserById(userId);
  }

  @HttpCode(201)
  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() body: UserDto, @Res() res: Response) {
    try {
      const token = await this.userService.createUser(body);
      res.cookie('Auth', token, { httpOnly: true, maxAge: 43200000 });
      res.json({ token: token });
    } catch (error) {
      return error
    }
  }

  @HttpCode(200)
  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res() res: Response,
  ) {
    try {
      const token = await this.userService.returnUser(body);
      res.cookie('Auth', token, { httpOnly: true, maxAge: 43200000 });
      res.json({ token: token });
    } catch (error) {
      throw error;
    }
  }

  @HttpCode(202)
  @Put('edit')
  @UseGuards(AuthGuard)
  async updateUser(@Req() req, @Body() body: UserDto) {
    const userId = req.user.userId;
    return this.userService.updateUserData(userId, body);
  }

  @HttpCode(201)
  @Post('/send-code')
  @UsePipes(ValidationPipe)
  async send_code(@Body() body:EmailDto){
    return this.userService.send_verification(body.email)
  }

  @HttpCode(203)
  @Delete('/delete-user')
  @UseGuards(AuthGuard)
  async deleteUser(@Req() req){
    return this.userService.deleteUser(req.userId)
  }
}
