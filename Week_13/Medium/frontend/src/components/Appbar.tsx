import { CiSearch } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";


export const Appbar = () => {
    return(
        <>
        <div className="h-[8vh] w-[90%] lg:w-full px-7 flex justify-between items-center">
            <div className="flex">
                <Link to={`/blogs`}>
                <p className="font-[sentient] flex items-center text-2xl lg:text-3xl tracking-tighter font-bold cursor-pointer">Writeium</p>
                </Link>
                <div className="flex items-center ml-3 gap-2 bg-[#F9F9F9] rounded-[20px] p-2">
                    <CiSearch className="text-[24px]" />
                    <div className="text-[15px] w-[12vh] lg:w-[25vh] h-[15px] text-[#000] font-[pally]">
                    <input className="outline-none font-[sans-serif]" placeholder="Search" type="text" autoFocus />
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center pr-5 lg:pr-15 text-[14px] gap-2 group cursor-pointer">
                    <div className="text-[20px] text-[#666] group-hover:text-[#000]">
                    <TfiWrite />
                    </div>
                    <Link to={`/publish`}>
                    <p className="text-sm text-[#666] group-hover:text-[#000]">Write</p>
                    </Link>
                </div>
                <div className="w-[25px] h-[25px]">
                    <Avatar name="Pratham Singh" h="h-[32px]" w="w-[32px]" />
                </div>
            </div>
        </div>
        <div className="bg-slate-200 h-[1px] w-full">

        </div>
        </>
    )
}