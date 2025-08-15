import NavBar from "./navbar/page";
import BestSeller from "./bestSeller/page";
import ThreeD from "./3dModel/page";
import Categories from "../Categories/page";
import VirtueTiles from "./VirtueTiles";
import Footer from "./Footer";

function Landing() {
    return (
        <div className="bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E8]">
            <NavBar />
            <BestSeller />
            <VirtueTiles />
            <Categories />
            <Footer />
        </div>
    );
}
export default Landing;
