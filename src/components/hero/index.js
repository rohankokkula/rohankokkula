import Content from './content';
import Img from './img';
// Assets
import { Lines1 } from '../icons/lines';

const Hero = () => {
    return (
        <section className="bg-shark pt-12  bp-menu:pt-24 pb-16 relative">
            <div className="top-5 -right-28 absolute">
                <Lines1 />
            </div>
            <div className="px-4 mx-auto max-w-1320 grid bp-menu:grid-cols-2 gap-x-24 gap-y-6">
                <Content />
                <Img />
            </div>
            <div className="bottom-24 -left-12 absolute">
                <Lines1 />
            </div>
        </section>
    );
};

export default Hero;
