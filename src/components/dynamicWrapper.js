import { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const DynamicWrapper = ({ children, skeleton }) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });
    return (
        <>
            <Suspense fallback={'loading'}>
                <section ref={ref}>{inView ? children : skeleton}</section>
            </Suspense>
        </>
    );
};

export default DynamicWrapper;
