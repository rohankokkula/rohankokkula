import { useState } from 'react';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import Item from './item';

const Toc = ({ sections }) => {
    const [activeItem, setActiveItem] = useState('');

    const handleSetActive = (to) => {
        setActiveItem(to);
    };

    return (
        <div className="pl-1">
            {sections?.map(({ label, id }) => (
                <Link
                    activeClass="text-ocean"
                    to={id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>
                    <div className="flex items-center">
                        <div
                            className={`h-1.5 w-1.5 rounded-full transition duration-150 ease-in-out  ${
                                activeItem === id ? 'bg-ocean' : 'bg-gray bg-opacity-50'
                            } mr-3`}></div>
                        <Item label={label} key={id} />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Toc;
