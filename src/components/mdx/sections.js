import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Sections = ({ children }) => {
    const [sections, setSections] = useState(children);
    const [visibleSection, setVisibleSection] = useState();
    const router = useRouter();

    useEffect(() => {
        let id = router.asPath.split('#')[1];

        if (id) {
            let activeSection = sections?.filter((section) => {
                return section?.props?.id === id;
            });

            return setVisibleSection(activeSection);
        } else {
            return setVisibleSection(sections[0]);
        }
    }, [router.asPath]);

    return <div>{visibleSection}</div>;
};

export default Sections;
