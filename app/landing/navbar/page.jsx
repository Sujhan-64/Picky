import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
function NavBar(){
    return(
        <div className="flex justify-between">
            <div>
                <p>ICON</p>
            </div>
            <div className="mr-0 flex gap-4 items-center justify-end">
                <ul className="flex gap-4">
                    <span>Home</span>
                    <Link href="/products">
                        <span>Products</span>
                    </Link>
                    <span>Home</span>
                    <span>Home</span>
                </ul>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            
        </div>
    )
}
export default NavBar