import Image from 'next/image';

import Dummy from '../../../../public/video-placeholder.png';

const Img = ({ src, alt, height, width }) => {
    // Change src to be dynamic
    return (
        <div className="mb-4 mt-3">
            <div style={{ height: height, width: width, position: 'relative' }}>
                <Image src={Dummy} alt={alt ?? 'Provide alt'} layout="fill" />
            </div>
        </div>
    );
};

export default Img;
