import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './blog.schema';
import { Model } from 'mongoose';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Blog.name) private blogModel:Model<BlogDocument>){}

  async getAll(){
    return this.blogModel.find({})
  }

  async getExactUserBlogs(id:string){
    return this.blogModel.find({owner:id})
  }

  async createBlog(dto:BlogDto){
    function slugify(text: string) {
      return text
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }
    return this.blogModel.create({...dto, slug:slugify(dto.title), comments:[]})
  }

  async getBlogDataById(blogID:string){
    return this.blogModel.findById(blogID)
  }

  async createCommentInBlog(blogID:string,commentDto:{name:string, comment:string}){
    const existingBlog = await this.blogModel.findById(blogID)
    if(!existingBlog){
      throw new NotFoundException(`Blog entry with ID ${blogID}`)
    }
    existingBlog.comments.push(commentDto)
    console.log('received',blogID,commentDto);
    
    

    const updatedBlog = await existingBlog.save()
    return updatedBlog.toObject()
  }

  async deleteBlogById(blogID:string){
    return this.blogModel.findByIdAndDelete(blogID)
  }

  async updateBlogData(blogId:string, dto:BlogDto){
    return  this.blogModel.findByIdAndUpdate(blogId,dto,{new:true})
  }
}