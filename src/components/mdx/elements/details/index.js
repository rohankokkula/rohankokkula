import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Description = dynamic(() => import('./description.js'));
const Header = dynamic(() => import('./header'));
const Tasks = dynamic(() => import('./tasks'));

const Details = ({ classes, description, title, text, tasks, data }) => {
    const [activeItem, setActiveItem] = useState(data[0]);
    const { asPath } = useRouter();

    useEffect(() => {
        let id = asPath.split('#')[1];

        if (!id) {
            setActiveItem(data[0]);
        } else {
            let selected = data.filter((item) => item.id === id);
            setActiveItem(selected[0]);
        }
    }, [asPath]);

    return (
        <div
            className={`${classes} px-6 scrollbar-thumb-rounded scrollbar-thumb-rounded scrollbar-thin scrollbar-track-seashell scrollbar-thumb-reef h-screen-calc`}>
            <Header
                title={activeItem?.title ?? 'Missing Title'}
                text={activeItem?.text ?? 'Missing Text'}
            />
            <Tasks tasks={activeItem?.tasks ?? []} />
            <Description description={activeItem?.description ?? 'Missing Description'} />
        </div>
    );
};

export default Details;
