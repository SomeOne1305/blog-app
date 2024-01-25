import { Controller, HttpCode, Get, Post, Delete, Patch,Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDto, CommentDto } from './dto/blog.dto';


@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogService:BlogsService){}

  @HttpCode(200)
  @Get('/all')
  async getAll(){
    return this.blogService.getAll()
  }

  @HttpCode(200)
  @Get("/my-blogs/:owner")
  async getById(@Param("owner") owner:string){
    return this.blogService.getExactUserBlogs(owner)
  }

  @HttpCode(201)
  @Post('/create')
  @UsePipes(ValidationPipe)
  async createBlog(@Body() dto:BlogDto){
    return this.blogService.createBlog(dto)
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
  async (@Param("id") id:string, @Body() dto:BlogDto){
    return this.blogService.updateBlogData(id,dto)
  }

  @HttpCode(202)
  @Delete('/delete/:id')
  async deleteUserData(@Param("id") id:string){
    return this.blogService.deleteBlogById(id)
  }
}
