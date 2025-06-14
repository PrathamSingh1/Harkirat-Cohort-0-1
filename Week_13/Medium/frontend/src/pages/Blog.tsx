import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
  });
  if (loading || !blog) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <p className="text-6xl lg:text-8xl font-[sentient]">Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  )
}

export default Blog