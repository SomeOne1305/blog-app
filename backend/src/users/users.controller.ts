import { Controller, Get, Post, Put, UseGuards,Req,Body ,UsePipes,HttpCode,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from './user.guard';
import { UserDto } from './dto/user.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly userService:UsersService){}

  @HttpCode(200)
  @Get("/all")
  async getAllUsers(){
    return this.userService.getAllUsers()
  }

  @HttpCode(200)
  @Get('user')
  @UseGuards(AuthGuard)
  async getSpecUser(@Req() req){
    const userId:string = req.user.userId
    return this.userService.getUserById(userId)
  }

  @HttpCode(201)
  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() body:UserDto){
    return this.userService.createUser(body)
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() body:{email:string,password:string}){
    return this.userService.returnUser(body)
  }

  @HttpCode(202)
  @Put('edit')
  @UseGuards(AuthGuard)
  async updateUser(@Req() req, @Body() body:UserDto){
    const userId = req.user.userId
    return this.userService.updateUserData(userId,body)
  }
}
