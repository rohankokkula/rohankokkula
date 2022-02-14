import Link from 'next/link';

const contentCompany = () => {
    return (
        <div className="mt-4 lg:absolute  lg:-ml-4 lg:mt-0 lg:pt-3 xl:transform w-full lg:w-80 xl:ml-0 xl:left-1/2 xl:-translate-x-1/2">
            <div className="transform lg:-translate-x-1/6 xl:translate-x-0 rounded-lg shadow-lg max-w-lg sm:max-w-none lg:max-w-88">
                <div className="rounded-lg shadow-xs">
                    <div className="md:grid bg-white rounded-lg shadow-xs md:grid-cols-5">
                        <div className="md:col-span-5 flex flex-col">
                            <div className="px-5 sm:px-8 pt-5 sm:pt-8 pb-4 sm:pb-6 lg:px-8 xl:pr-8">
                                <div>
                                    {/* <div className="hover:bg-blue-50 py-2 px-2 rounded">
                                        <Link href="/videos">
                                            <a className="flex items-center space-x-4 text-base hover:text-ocean transition ease-in-out duration-150">
                                                <p className="font-bold text-base mb-0">
                                                    Getting Started
                                                </p>
                                            </a>
                                        </Link>
                                    </div> */}
                                    <div className="hover:bg-blue-50 py-2 px-2 rounded">
                                        <Link href="/videos">
                                            <a className="flex items-center space-x-4 text-base hover:text-ocean transition ease-in-out duration-150">
                                                <p className="font-bold text-base mb-0">Videos</p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contentCompany;
