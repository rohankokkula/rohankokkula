import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
const ContentCompany = dynamic(() => import('./contentCompany'), { ssr: false });
import Arrow from '../icons/arrow';

const menuDesktop = () => {
    const [load, setLoad] = useState(false);

    return (
        <nav
            onClick={() => setLoad(true)}
            onMouseOver={() => setLoad(true)}
            className="hidden lg:flex">
            <div className="font-semibold menu-dropdown">
                <Link href="/getting-started">
                    <a className={`menu-dropdown-title cursor-pointer text-seashell`}>
                        Getting Started
                    </a>
                </Link>
                {/* <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div> */}
            </div>
            <div className="font-semibold menu-dropdown pl-10">
                <span className={`menu-dropdown-title cursor-pointer text-seashell`}>Lessons</span>
                {/* <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div> */}
            </div>
            <div className="font-semibold menu-dropdown px-10">
                <Link href="/chatbot-templates">
                    <a className={`menu-dropdown-title cursor-pointer text-seashell`}>Templates</a>
                </Link>
                {/* <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div> */}
            </div>
            <div className="font-semibold menu-dropdown">
                <span
                    className={`menu-dropdown-title cursor-pointer text-seashell flex items-center`}>
                    More
                    <span className="ml-1 transform rotate-90 group">
                        <Arrow background="transparent" arrow="white" />
                    </span>
                </span>
                <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div>
            </div>
        </nav>
    );
};

export default menuDesktop;
