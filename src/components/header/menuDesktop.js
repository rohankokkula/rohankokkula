import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
const ContentCompany = dynamic(() => import('./contentCompany'), { ssr: false });
const ContentCompany2 = dynamic(() => import('./contentCompany2'), { ssr: false });
const ContentCompany3 = dynamic(() => import('./contentCompany3'), { ssr: false });
import Arrow from '../icons/arrow';

const menuDesktop = () => {
    const [load, setLoad] = useState(false);

    return (
        <nav
            onClick={() => setLoad(true)}
            onMouseOver={() => setLoad(true)}
            className="hidden lg:flex">
            <div className="font-semibold menu-dropdown pl-10">
                <span className={`text-sm menu-dropdown-title cursor-pointer text-seashell`}>
                    Understand botpress
                </span>
                <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany />}
                </div>
            </div>
            <div className="font-semibold menu-dropdown px-10">
                <Link href="/chatbot-templates">
                    <a className={`text-sm menu-dropdown-title cursor-pointer text-seashell`}>
                        Chatbot skills
                    </a>
                </Link>
                <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany2 />}
                </div>
            </div>
            <div className="font-semibold menu-dropdown">
                <span
                    className={`text-sm menu-dropdown-title cursor-pointer text-seashell flex items-center`}>
                    More
                    <span className="ml-1 transform rotate-90 group">
                        <Arrow background="transparent" arrow="white" />
                    </span>
                </span>
                <div className="menu-dropdown-content text-shark font-bold">
                    {load && <ContentCompany3 />}
                </div>
            </div>
        </nav>
    );
};

export default menuDesktop;
