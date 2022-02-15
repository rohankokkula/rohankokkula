import dynamic from 'next/dynamic';

import ButtonLink from '../buttons/buttonLink';

const Content = () => {
    return (
        <div className="text-center mx-auto max-w-[820px] bp-menu:max-w-[614px]  bp-menu:text-left bp-menu:mx-auto bp-menu:z-[1] relative">
            <h1 className="font-heading  text-seashell mb-5 text-3xl sm:text-4xl leading-[48px] bp-menu:leading-[64px] bp-menu:text-[48px]">
                Mastering Botpress, Chatbots, and Conversational AI
            </h1>
            <p className="text-[17px] text-seashell leading-[24px] mb-5">
                Become a powerful Conversational AI developer with these content pieces.
            </p>
            <div className="hidden lg:flex">
                <ButtonLink
                    link="/getting-started"
                    label="Build your first bot"
                    hollow={false}
                    transparent={false}
                    className="font-bold text-white z-10"
                    icon="arrow"
                />
            </div>
        </div>
    );
};

export default Content;
