import Image from 'next/image';

const Img = ({ src, alt, height, width, caption }) => {
    return (
        <div className="mb-6 mt-5 p-8 bg-gray-separator bg-opacity-40 rounded-md">
            <div
                style={{ height: height, width: width, position: 'relative' }}
                className="shadow-lg">
                <Image src={src} alt={alt ?? 'Provide alt'} layout="fill" objectFit="contain" />
            </div>
            {caption && (
                <span className="text-center block mt-4 text-xs text-lightGray">{caption}</span>
            )}
        </div>
    );
};

export default Img;
