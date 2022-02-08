import dynamic from 'next/dynamic';
import { useState } from 'react';
import Menu from '../icons/menu';
import MenuClose from '../icons/menuClose';
import MenuDesktop from './menuDesktop';
const MenuMobile = dynamic(() => import('./menuMobile'), { ssr: false });

const mainNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MenuDesktop />
            <div className="absolute text-shark top-20 inset-x-0 transition transform origin-top-right lg:hidden">
                {isOpen ? <MenuMobile /> : ''}
            </div>
            <div className="lg:hidden">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center py-2 space-x-4 text-base leading-6  transition ease-in-out duration-150">
                    {isOpen ? <MenuClose /> : <Menu />}
                </button>
            </div>
        </>
    );
};

export default mainNavigation;
