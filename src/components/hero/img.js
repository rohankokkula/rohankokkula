import Image from 'next/image';
import HeroGraphic from '../../../public/hero-image-graphic.png';

const Img = () => {
    return (
        <div className="-mb-24 justify-self-center bp-menu:justify-self-end z-[1] bp-menu:z-[0]">
            <Image src={HeroGraphic} placeholder="blur" height={548} width={574} />
        </div>
    );
};

export default Img;
