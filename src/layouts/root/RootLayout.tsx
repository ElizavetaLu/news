import { Outlet } from "react-router-dom"; 
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"; 
import "./RootLayout.scss";


const RootLayout = () => {
    
    return (
        <>
            <Header /> 

            <div className="outlet">
                <Outlet />
            </div>

            <Footer />
        </>
    )
};

export default RootLayout;
