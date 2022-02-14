import Link from 'next/link';
import MainNavigation from './mainNavigation';
import ButtonLink from '../buttons/buttonLink';

const Header = ({ isDark }) => {
    return (
        <header className={`bg-shark top-0`} style={{ zIndex: 99999 }}>
            <div className="mx-auto max-w-1320 border-b border-lightGray">
                <div className="flex justify-between items-center py-6 lg:space-x-10 h-20 lg:h-auto px-4">
                    <div>
                        <div>
                            <Link href="/">
                                <a className="flex  text-seashell flex-col bp-menu:items-end  bp-menu:flex-row">
                                    <img height={32} width={143} alt="logo" src="/logo-dark.svg" />
                                    <span className="font-semibold text-sm mt-1 bp-menu:mt-0 bp-menu:text-base bp-menu:ml-3 bp-menu:block">
                                        Learning Center
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <MainNavigation />
                    <div className="hidden lg:flex">
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
