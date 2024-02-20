import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserDocument, UserSchema } from './user.schema';
import { UsersController } from './users.controller';
import { JwtModule,JwtService } from '@nestjs/jwt';

@Module({
  controllers:[UsersController],
  providers: [UsersService],
  imports:[
    MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    JwtModule.register({
      secret:"my_secret_key@_@-21",
      global:true,
      signOptions:{
        expiresIn:"3d"
      }
    })
  ],
  exports:[]
})
export class UsersModule {}
