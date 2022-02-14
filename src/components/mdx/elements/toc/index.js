import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

import Item from './item';

const Toc = ({ sections }) => {
    const [activeItem, setActiveItem] = useState(0);
    const [root, setRoot] = useState();
    const { push, query, asPath } = useRouter();

    const handleSectionChange = (id) => {
        setActiveItem(id);
        setRoot(id);
        push(`/${query?.slug}#${id}`, undefined, { shallow: true, scroll: true });
        return window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // // Only for first page load
        let id = asPath.split('#')[1];

        if (!id) {
            setActiveItem(sections[0].id);
            setRoot(sections[0].id);
        } else {
            setActiveItem(id);
            setRoot(id);
        }
    }, []);

    return (
        <div className="pl-1">
            {sections?.map(({ label, id, subsections }) => {
                return (
                    <div key={id}>
                        <Link
                            to={id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-128}
                            onSetActive={(to) => setActiveItem(to)}>
                            <button
                                className={`flex items-center ${activeItem === id && 'text-ocean'}`}
                                onClick={() => handleSectionChange(id)}>
                                <div
                                    className={`h-1.5 w-1.5 rounded-full transition duration-150 ease-in-out  ${
                                        activeItem === id ? 'bg-ocean' : 'bg-gray bg-opacity-50'
                                    } mr-3`}></div>
                                <Item label={label} key={id} />
                            </button>
                        </Link>
                        {root === id && subsections && (
                            <div className="ml-8 mb-1">
                                {subsections?.map(({ label, id }) => (
                                    <Link
                                        to={id}
                                        spy={true}
                                        smooth={true}
                                        offset={-128}
                                        onSetActive={(to) => setActiveItem(to)}>
                                        <button
                                            className={`flex items-center ${
                                                activeItem === id && 'text-lighthouse'
                                            }`}
                                            onClick={() => setActiveItem(id)}>
                                            <div
                                                className={`h-1.5 w-1.5 rounded-full transition duration-150 ease-in-out  ${
                                                    activeItem === id
                                                        ? 'bg-lighthouse'
                                                        : 'bg-gray bg-opacity-50'
                                                } mr-3`}></div>
                                            <Item label={label} key={id} sub="true" />
                                        </button>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Toc;
