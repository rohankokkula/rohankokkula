import Image from 'next/image';
import ButtonLink from '../buttons/buttonLink';
import Video from './video';
// Assets
import BackgroundTextureDots from '../../../public/background-texture-dots.png';

const Featured = () => {
    return (
        <>
            <div className="absolute top-12 -right-[145px]" style={{ zIndex: -1 }}>
                <Image
                    src={BackgroundTextureDots}
                    height={582}
                    width={1801}
                    layout="fixed"
                    placeholder="blur"
                />
            </div>
            <div className="mx-auto max-w-1320 pb-12 sm:pb-20 border-b border-gray-separator">
                <div className="max-w-max">
                    <p className="font-heading text-3xl sm:text-4xl text-shark border-b-4">
                        Featured Guide
                    </p>
                </div>
                <div className="grid mt-6 sm:mt-10 lg:grid-cols-2 bp-menu:mt-[104px]">
                    <div className="sm:justify-self-center lg:justify-self-end">
                        <Video />
                    </div>
                    <div className="w-full sm:max-w-[360px] pt-6 sm:pt-12 justify-self-center">
                        <p className="text-shark font-bold  text-3xl sm:text-4xl mb-5">
                            Getting Started
                        </p>
                        <p className="mb-5 font-semibold text-[17px]">
                            Learn how to build a powerful chatbot from scratch with our starterpack
                        </p>
                        <div>
                            <ButtonLink
                                link="https://botpress.com/free-trial"
                                label="Learn more"
                                hollow={false}
                                transparent={false}
                                className="font-heading text-white"
                                icon="arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;
