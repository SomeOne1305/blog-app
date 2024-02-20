import { Injectable, NotFoundException,UnauthorizedException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model} from 'mongoose';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel:Model<UserDocument>,
    private readonly jwt:JwtService
  ){}

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
    const {email,isProfile,name,password,profile_image,social_networks,surname} = dto
    const hashedPassword = bcrypt.hash(password,16)
    const user = {
      name,
      surname,
      email,
      password:hashedPassword,
      profile_image,
      isProfile,
      social_networks
    }
    const savedUser = await this.userModel.create(user)
    return this.jwt.sign({userId:savedUser._id, email:savedUser.email})
  }

  async returnUser(dto:{email:string, password:string}){
    const user = await this.userModel.findOne({email:dto.email})
    if(!user){
      throw new UnauthorizedException("Invalid credentials")
    }
    if(bcrypt.compare(dto.password,user.password)){
      return this.jwt.sign({userId:user._id,email:user.email})
    }
  }

  async updateUserData(userId:string, dto:UserDto){
    return this.userModel.findByIdAndUpdate(userId,dto,{new:true})
  }
}
// https://medium.com/@anikettikone9/authentication-authorization-using-nest-js-typescript-with-mongodb-2f4de48fafe0
// 