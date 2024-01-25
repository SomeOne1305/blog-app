import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument, UserSchema } from './user.schema';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}

  async getAllUsers(){
    return this.userModel.find({})
  }

  async getUserById(userId:string){
    const existingUser = await this.userModel.findById(userId)
    if(!existingUser){
      throw new NotFoundException(`User entry with ID ${userId}`)
    }
    return this.userModel.findById(userId)
  }

  async createUser(dto:UserDto){
    this.userModel.create(dto)
  }

  async updateUserData(userId:string, dto:UserDto){
    return this.userModel.findByIdAndUpdate(userId,dto,{new:true})
  }
}
