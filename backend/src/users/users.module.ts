import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store'
import { RedisClientOptions } from 'redis';

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
    }),
    MailerModule.forRoot({
      transport:{
        auth:{
          user:process.env.MAIL_USER,
          pass:process.env.MAIL_PASS
        },
      },
    }),
    CacheModule.register<RedisClientOptions>({
      isGlobal:true,
      store:'redis',
      password:process.env.REDIS_PASS,
      socket:{
        host:process.env.REDIS_HOST,
        port:+process.env.REDIS_PORT
      },
    })
  ],
  exports:[]
})
export class UsersModule {}
