import { Appbar } from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

const Blogs = () => {
  const {loading, blogs} = useBlogs();

if (loading) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <p className="text-6xl lg:text-8xl font-[sentient]">Loading...</p>
    </div>
  );
}
  return (
    <>
    <Appbar />
    <div className="max-w-md ml-[15%] mt-[5vh]">
      {blogs.map((blog, index) => <BlogCard
            key={index}
            id={blog.id}
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate={"2nd Feb 2025"}
        />)}
        
    </div>
    </>
  )
}

export default Blogs