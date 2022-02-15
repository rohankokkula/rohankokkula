import Link from 'next/link';
import { useState } from 'react';

import Arrow from '../icons/arrow';
import Company from './contentCompany';
import ButtonLink from '../buttons/buttonLink';

const menuMobile = () => {
    const [openIndex, setOpenIndex] = useState(true);

    return (
        <div
            className="bg-seashell px-4 pb-4 flex flex-col w-full border-b overflow-y-scroll border-b-zinc-300"
            style={{ height: 'calc(100vh - 80px)' }}>
            <>
                <Link href="/getting-started">
                    <button
                        type="button"
                        // onClick={() => (openIndex === 0 ? setOpenIndex(false) : setOpenIndex(0))}
                        className={`my-4 rounded shadow-md lg:text-white p-4 inline-flex items-center flex-nowrap text-base leading-6 font-bold hover:text-ocean focus:outline-none focus:text-ocean transition ease-in-out duration-150 
            }`}>
                        <span>Build your first botpress bot</span>
                    </button>
                </Link>
                {/* {openIndex === 0 && <Company />} */}
            </>
            <>
                <Link href="/lessons">
                    <button
                        type="button"
                        onClick={() => (openIndex === 1 ? setOpenIndex(false) : setOpenIndex(1))}
                        className={`my-4 rounded shadow-md p-4 lg:text-white inline-flex items-center flex-nowrap text-base leading-6 font-bold hover:text-ocean focus:outline-none focus:text-ocean transition ease-in-out duration-150 
            }`}>
                        <span>Lessons</span>
                    </button>
                </Link>
                {/* {openIndex === 1 && <Company />} */}
            </>

            <>
                <Link href="/chatbot-templates">
                    <button
                        type="button"
                        onClick={() => (openIndex === 2 ? setOpenIndex(false) : setOpenIndex(2))}
                        className={`my-4 rounded shadow-md p-4 lg:text-white inline-flex items-center flex-nowrap text-base leading-6 font-bold hover:text-ocean focus:outline-none focus:text-ocean transition ease-in-out duration-150 
            }`}>
                        <span>Templates</span>
                    </button>
                </Link>
                {/* {openIndex === 2 && <Company />} */}
            </>
            <>
                <button
                    type="button"
                    onClick={() => (openIndex === 3 ? setOpenIndex(false) : setOpenIndex(3))}
                    className={`my-4 rounded shadow-md p-4 lg:text-white inline-flex items-center flex-nowrap text-base leading-6 font-bold hover:text-ocean focus:outline-none focus:text-ocean transition ease-in-out duration-150 
            }`}>
                    <span>More</span>
                    <span className="ml-2">
                        <Arrow down={true} />
                    </span>
                </button>
                {openIndex === 3 && <Company />}
            </>
            <>
                <ButtonLink
                    link="https://botpress.com/free-trial"
                    label="Download Open-Source"
                    hollow={false}
                    transparent={false}
                    className="font-bold text-white z-10 p-3 justify-between mt-3"
                    icon="arrow"
                />
            </>
        </div>
    );
};

export default menuMobile;
