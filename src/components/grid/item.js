import Link from 'next/link';
import Arrow from '../icons/arrow';

const GridItem = ({ title, excerpt, slug, gridItemClasses, arrow }) => {
    return (
        <Link href={slug ?? '/'}>
            <div
                className={`bg-shark rounded-xl p-6 ${gridItemClasses} transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer`}>
                <h3 className="text-white font-bold text-2xl mb-1 ">{title}</h3>
                <p className="text-white font-light">{excerpt}</p>
                <div className="flex justify-end mt-2">
                    <Arrow
                        className="cursor-pointer"
                        background={arrow && '#F66F48'}
                        arrow={arrow && 'white'}
                    />
                </div>
            </div>
        </Link>
    );
};

export default GridItem;
