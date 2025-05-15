import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./detailCard";

const ServiceDetails = () => {
    const banner = 'https://i.ibb.co/6md9kxH/2111-w015-n001-617-B-p15-617.jpg'
    const { id } = useParams()
    const idInt = parseInt(id)
    const allData = useLoaderData()
    const thisData = allData?.filter(data => data.id === idInt)[0]
    const { title, details, packages } = thisData

    return (

        <div className="lg:max-w-7xl lg:mx-auto p-4 ">
            <div className=" space-y-6 md:space-y-10 lg:space-y-20">
                <div className="relative z-0 flex flex-col justify-center items-center">
                    <div className="hero-overlay bg-black opacity-20 absolute h-full z-5"></div>
                    <img src={banner} className="w-full " alt="" />
                    <h1 className="absolute  z-10 text-rose-200 text-center font-special font-bold text-6xl">{title}</h1>
                </div>
                <p className="text-2xl text-center my-6 font-special">{details} We have {packages.length} packages for you </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
                        {
                            packages?.map(thisPackage => <DetailCard key={thisPackage.package_id} thisPackage={thisPackage}></DetailCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;