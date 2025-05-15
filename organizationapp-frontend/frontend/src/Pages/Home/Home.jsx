// import { useContext } from "react";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/banner";
import Services from "../../Components/Services/Services";
import Reviews from "../../Components/Reviews/Reviews";
import Album from "../../Components/Album/Album";


const Home = () => {
    const data = useLoaderData()
    // console.log(data);
    return (

        <div className="bg-white">
            <div className="lg:max-w-7xl lg:mx-auto bg-white">
                <Banner></Banner>
                <Services services={data} ></Services>
                <Reviews></Reviews>
                <Album></Album>

            </div>
        </div>
    );
};

export default Home;