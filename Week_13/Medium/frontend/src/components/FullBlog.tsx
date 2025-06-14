import type { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Avatar"


export const FullBlog = ({ blog }: {blog: Blog}) => {
    return (
        <>
        <Appbar />
        <div className="flex-col m-auto lg:max-w-[50vw] max-w-[95vw] items-center justify-center h-screen w-screen p-8">
            <div className="lg:text-[42px] text-[35px] pt-5 text-[#242424] font-[800] font-[supreme] lg:leading-[50px] leading-[40px] tracking-tight">{blog.title}</div>

            <div className="flex items-center pt-5 gap-4">
                <div className="flex items-center">
                    <Avatar name="Pratham Singh" h="h-[32px]" w="w-[32px]" />
                </div>
                <div className="text-[14px] text-[#242424] font-[400] leading-[20px] font-[supreme]">{blog.author.name || "Anonymous"}</div>
            </div>
            <div className="bg-slate-200 h-[1px] w-full mt-8">

            </div>
            <div className="mt-5">
                <p className="text-[20px] leading-[32px] font-[pally] tracking-wide text-[#242424]">{blog.content}</p>
            </div>
            
        </div>
        </>
    )
}