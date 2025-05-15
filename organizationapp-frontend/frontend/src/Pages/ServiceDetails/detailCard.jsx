import PropTypes from 'prop-types'
import { saveTheService } from "../../Local Storage/localStorage";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const DetailCard = ({ thisPackage }) => {
    const { package_name, package_price, package_features } = thisPackage
    const toastInfo = {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }
    const handleService = () => {
        saveTheService(thisPackage)
        return toast.success('added to your selection ', toastInfo)
    }
    return (
        <div>
            <div className="relative flex w-full h-[500px] max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-rose-600 to-rose-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative m-0 mb-8  overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                    <p className="block   font-normal uppercase leading-normal text-white antialiased ">
                        {package_name}
                    </p>
                    <h1 className="text-5xl text-white">{package_price}</h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-6">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"

                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-3 w-3"
                                >
                                    <path

                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block     text-base font-normal leading-relaxed text-inherit antialiased">
                                {package_features[0]}
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"

                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-3 w-3"
                                >
                                    <path

                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block     text-base font-normal leading-relaxed text-inherit antialiased">
                                {package_features[1]}
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"

                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-3 w-3"
                                >
                                    <path

                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block     text-base font-normal leading-relaxed text-inherit antialiased">
                                {package_features[2]}
                            </p>
                        </li>

                    </ul>
                </div>
                <div className="mt-12 p-0">
                    <button
                        className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle     text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                        onClick={handleService}
                    >
                        Add to Collection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;
DetailCard.propTypes = {
    thisPackage: PropTypes.object
}