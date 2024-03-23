import { Outlet } from "react-router-dom"

const BlogsPage = () => {
  return (
    <section className="w-full py-6">
      <div className="container">
        <Outlet/>
      </div>
    </section>
  )
}

export default BlogsPage