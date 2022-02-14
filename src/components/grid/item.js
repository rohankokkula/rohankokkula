import Link from 'next/link';
import Arrow from '../icons/arrow';
import LineWithBullet from '../icons/lineWithBullet';
import Elements from '../icons/elements';

const GridItem = ({ title, excerpt, category, slug, gridItemClasses, arrow }) => {
    return (
        <Link href={slug ?? '/'}>
            <div
                className={`rounded-2xl bg-gray-separator bg-opacity-50 py-8 px-6 md:py-10 md:px-8 ${gridItemClasses} transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer`}>
                <div className="flex items-center justify-center ">
                    <Elements />
                </div>
                <div>
                    <div className="flex items-center mb-3">
                        <LineWithBullet />
                        <span className="ml-2 text-ocean font-bold">{category}</span>
                    </div>
                    <h3 className="font-bold text-[26px] mb-3">{title}</h3>
                    <p className="font-light">{excerpt}</p>
                </div>
                <div className="flex justify-end mt-4 items-center">
                    <span className="font-bold mr-2">Read More</span>
                    <Arrow
                        className="cursor-pointer"
                        background={arrow && '#3276EA'}
                        arrow={arrow && 'white'}
                    />
                </div>
            </div>
        </Link>
    );
};

export default GridItem;
