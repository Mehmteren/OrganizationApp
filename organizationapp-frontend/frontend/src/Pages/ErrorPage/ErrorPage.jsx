import { useRouteError } from "react-router-dom";
import { BiError } from "react-icons/bi";
import Navbar from "../../Components/NavBar/Navbar";
const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className="bg-white">
            <Navbar></Navbar>
            <div className="flex flex-col h-screen justify-center items-center font-mono">
                <div className="border rounded border-red-500 p-5 text-center py-20 text-red-500">
                    <h1 className="text-[100px] flex justify-center"><BiError></BiError></h1>
                    <h1 className="text-5xl font-bold ">
                        {error.status}
                    </h1>
                    <h2 className="text-4xl font-medium ">{error.statusText}</h2>
                    <h3 className="text-3xl text-red-500">{error.error.message}</h3>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;