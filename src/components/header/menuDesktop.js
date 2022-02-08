import dynamic from 'next/dynamic';
import { useState } from 'react';
const ContentCompany = dynamic(() => import('./contentCompany'), { ssr: false });

const menuDesktop = () => {
    const [load, setLoad] = useState(false);

    return (
        <nav
            onClick={() => setLoad(true)}
            onMouseOver={() => setLoad(true)}
            className="hidden lg:flex flex-1 lg:flex-auto space-x-10 pl-4">
            <div className="font-semibold menu-dropdown">
                <span className={`menu-dropdown-title cursor-pointer`}>Getting Started</span>
                <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div>
            </div>
            <div className="font-semibold menu-dropdown">
                <span className={`menu-dropdown-title cursor-pointer`}>Videos</span>
                <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div>
            </div>
            <div className="font-semibold menu-dropdown">
                <span className={`menu-dropdown-title cursor-pointer`}>Lorem</span>
                <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div>
            </div>
            <div className="font-semibold menu-dropdown">
                <span className={`menu-dropdown-title cursor-pointer`}>Lorem</span>
                <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div>
            </div>
        </nav>
    );
};

export default menuDesktop;
