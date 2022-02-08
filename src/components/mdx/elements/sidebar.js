import dynamic from 'next/dynamic';

const Toc = dynamic(() => import('./toc'), { ssr: false });
import ButtonLink from '../../buttons/buttonLink';

const Sidebar = ({ sections, classes }) => {
    return (
        <div className={`h-max ${classes ?? 'top-6 sticky'}`}>
            <div className="mb-5">
                <p className="font-bold mb-3">Table of Contents</p>
                <hr className="border-gray-separator" />
            </div>
            {sections && <Toc sections={sections} />}
            <div className="mt-6">
                <ButtonLink
                    link="https://botpress.com/free-trial"
                    label="Download Open-Source"
                    hollow={false}
                    transparent={false}
                    className="font-bold text-white z-10 w-full justify-center"
                />
            </div>
        </div>
    );
};

export default Sidebar;
