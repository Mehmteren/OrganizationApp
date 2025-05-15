import PropTypes from 'prop-types'
const SelectionCard = ({ mySelection }) => {
    const { package_name, package_price, package_features } = mySelection

    return (
        <div className="relative flex w-full h-[400px] max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-rose-600 to-rose-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
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

        </div>
    );
};

export default SelectionCard;
SelectionCard.propTypes = {
    mySelection: PropTypes.object
}