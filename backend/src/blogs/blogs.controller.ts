import { Controller, HttpCode, Get, Post, Delete, Patch,Param, Req,Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDto, CommentDto } from './dto/blog.dto';
import { AuthGuard } from 'src/users/user.guard';
import { Request } from 'express';


@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogService:BlogsService){}

  @HttpCode(200)
  @Get('/all')
  async getAll(){
    return this.blogService.getAll()
  }

  @HttpCode(200)
  @Get('/latest')
  async returnLatest(){
    return this.blogService.getHotNews()
  }

  @HttpCode(200)
  @Get("/my-blogs")
  @UseGuards(AuthGuard)
  async getById(@Req() req){
    return this.blogService.getExactUserBlogs(req.user.userId)
  }

  @HttpCode(201)
  @Post('/create')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard)
  async createBlog(@Body() dto:BlogDto,@Req() req){

    return this.blogService.createBlog(dto,req.user.userId)
  }

  @HttpCode(200)
  @Get(':blogId')
  async getBlogById(@Param("blogId") blogId:string){
    return this.blogService.getBlogDataById(blogId)
  }

  @HttpCode(201)
  @Post('/add-comment/:blogId')
  @UsePipes(ValidationPipe)
  async writeComment(@Param("blogId") blogId:string,@Body() dto:CommentDto){
    console.log(dto);
    
    return this.blogService.createCommentInBlog(blogId,dto)
  }

  @HttpCode(201)
  @Patch('/update/:id')
  @UseGuards(AuthGuard)
  async (@Param("id") id:string, @Body() dto:BlogDto){
    return this.blogService.updateBlogData(id,dto)
  }

  @HttpCode(202)
  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  async deleteUserData(@Param("id") id:string){
    return this.blogService.deleteBlogById(id)
  }
}
