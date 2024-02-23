import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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
    const {email,password,} = dto
    const userExist = await this.userModel.findOne({email:email})
    if(userExist){
      throw new BadRequestException('This user has already been registered.')
    }
    const hashedPassword = await bcrypt.hash(password,12)


    const savedUser = await this.userModel.create({...dto,password:hashedPassword})
    return this.jwt.sign({userId:savedUser._id, email:savedUser.email})
  }

  async returnUser(dto:{email:string, password:string}){
    const user = await this.userModel.findOne({email:dto.email})
    if(!user){
      throw new UnauthorizedException("Invalid credentials")
    }
    if(await bcrypt.compare(dto.password,user.password) && user){
      return this.jwt.sign({userId:user._id,email:user.email})
    }else{
      throw new BadRequestException('Invalid credentials')
    }
  }

  async updateUserData(userId:string, dto:UserDto){
    return this.userModel.findByIdAndUpdate(userId,dto,{new:true})
  }
}
// https://medium.com/@anikettikone9/authentication-authorization-using-nest-js-typescript-with-mongodb-2f4de48fafe0
// 