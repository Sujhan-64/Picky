import { useDebugValue } from "react";
import { Catitems } from "@/app/data/data";
import Image from "next/image";
export default function Categories(){
    return(
        <div>
            <div className="flex flex-wrap justify-center gap-2">
                {Catitems.map((item) =>(
                    <div key={item.id} className="flex w-[200px] h-[200px] bg-white border rounded-sm 
                     border-black justify-center items-center overflow-hidden shadow-inner hover:shadow-xl transition-shadow">
                            <Image src={item.content} alt="#" className="w-full h-full object-cover transform
                            transition-transform duration-300 hover:scale-105"></Image>

                    </div>
                ))}
            </div>
            <div className="text-right mr-20.5">
                <a href="#">more</a>
            </div>
        </div>
    )
}