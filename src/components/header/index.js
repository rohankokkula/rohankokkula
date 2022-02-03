import Link from 'next/link';
import MainNavigation from './mainNavigation';
import ButtonLink from '../buttons/buttonLink';

const Header = ({ isDark }) => {
    return (
        <header className="bg-white sticky top-0" style={{ zIndex: 99999 }}>
            <div className="mx-auto max-w-screen-xl">
                <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10 h-20 lg:h-auto px-4">
                    <div>
                        <div className="inline-flex">
                            <Link href="/">
                                <a>
                                    <img height={32} width={143} alt="logo" src="/logo.svg" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <MainNavigation />
                    <div className="hidden lg:flex items-center justify-end space-x-3 ">
                        <ButtonLink
                            link="https://botpress.com/free-trial"
                            label="Download Open-Source"
                            hollow={false}
                            transparent={false}
                            className="font-bold text-white z-10"
                            icon="arrow"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
