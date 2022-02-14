import dynamic from 'next/dynamic';

const Toc = dynamic(() => import('./toc'), { ssr: false });
import ButtonLink from '../../buttons/buttonLink';

const Sidebar = ({ sections, classes, customTitle }) => {
    return (
        <div className={`${classes ?? 'top-6 sticky'}`}>
            <div>
                <div className="mb-5">
                    <p
                        className={`${
                            customTitle
                                ? 'font-bold text-3xl sm:text-4xl mb-4 leading-[48px]'
                                : 'font-bold mb-3'
                        }`}>
                        {customTitle ?? 'Table of Contents'}
                    </p>
                    <hr className="border-gray-separator" />
                </div>
                {sections && <Toc sections={sections} />}
            </div>
            <div className="mt-6">
                <ButtonLink
                    link="https://botpress.com/free-trial"
                    label="Download Open-Source"
                    hollow={false}
                    transparent={false}
                    className="font-bold text-white z-10 w-full justify-center"
                    icon="arrow"
                />
            </div>
        </div>
    );
};

export default Sidebar;
