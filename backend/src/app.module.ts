import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

//Users
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

//Blogs
import { BlogsModule } from './blogs/blogs.module';
import { BlogsController } from './blogs/blogs.controller';
import { BlogsService } from './blogs/blogs.service';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://axmadxolmuminov2007:1Flu6pth4ODIaZuI@database.ucujp4d.mongodb.net/?retryWrites=true&w=majority`),
    UsersModule,
    BlogsModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, UsersController, BlogsController],
  providers: [AppService, UsersService, BlogsService],
  exports: [],
})
export class AppModule {}
//1Flu6pth4ODIaZuI
//mongodb+srv://axmadxolmuminov2007:<password>@database.ucujp4d.mongodb.net/?retryWrites=true&w=majority
