import NavBar from "./navbar/page";
import BestSeller from "./bestSeller/page";
import ThreeD from "./3dModel/page";
import Categories from "../Categories/page";
import { FooterComponent } from "./footer/page";
function Landing(){
    return(
        <>
            <NavBar/>
            <div className="flex justify-center mt-25">
                <BestSeller/>
            </div>
            <ThreeD/>
            <Categories/>
            <FooterComponent/>
        </>
    )
}
export default Landing