import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBer from "../NavBer/NavBer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;