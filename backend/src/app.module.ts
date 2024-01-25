import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://axmadxolmuminov2007:1Flu6pth4ODIaZuI@database.ucujp4d.mongodb.net/?retryWrites=true&w=majority"), BlogsModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}
//1Flu6pth4ODIaZuI
//mongodb+srv://axmadxolmuminov2007:<password>@database.ucujp4d.mongodb.net/?retryWrites=true&w=majority
