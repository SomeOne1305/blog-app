import axios from "axios";

export const BlogsService = {
  async getBlogBySlug(slug?: string) {
    const response = await axios.get("http://localhost:8000/v1/api/blogs/blog/"+slug);
    console.log(response);
    
    return response?.data;
  }
}
