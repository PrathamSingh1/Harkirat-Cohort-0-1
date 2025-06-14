import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";


interface BlogCardProps {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="cursor-pointer">
        <div className="flex pb-2">
            <div className="flex justify-center">
                <Avatar h="h-[20px]" w="w-[20px]" name={authorName} /> 
            </div>
            <div className="font-[400] text-sm ml-2">
                {authorName} 
            </div>
            <div className="flex justify-center items-center ml-2">
                <Circle />
            </div>
            <div className="font-[400] text-sm ml-1 text-[#666]">
                {publishedDate}
            </div>
            
        </div>
        <div className="text-[24px] tracking-tighter font-[800] font-[supreme]">
            {title}
        </div>
        <div className="text-[#666] text-[17px] font-[pally]">
            {content.slice(0, 300) + "..."}
        </div>
        <div className="text-sm text-[#666] font-[400] font-[pally] mt-8">
            {`${Math.ceil(content.length / 100)} min read`}
        </div>
        <div className="bg-slate-200 h-[1px] w-full mt-8">

        </div>
    </div>
    </Link>
}

export default BlogCard

function Circle() {
    return (
        <div className="w-1 h-1 bg-slate-400 rounded-full">

        </div>
    )
}


