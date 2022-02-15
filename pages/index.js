import dynamic from 'next/dynamic';

import Hero from '../src/components/hero';
// Components
import Layout from '../src/components/layout';
import SEO from '../src/components/seo';
const DynamicWrapper = dynamic(() => import('../src/components/dynamicWrapper'));
const Grid = dynamic(() => import('../src/components/grid'));
const FeaturedPreload = dynamic(() => import('../src/components/featured/featuredPreload.js'), {
    suspense: true
});
const Featured = dynamic(() => import('../src/components/featured/index'), {
    ssr: false,
    suspense: true
});

const Homepage = () => {
    let data = [
        {
            category: 'Botpress guide',
            title: 'Must have skills',
            excerpt: 'Learn how to build a powerful chatbot from scratch with our starterpack',
            slug: '/skills'
        },
        {
            category: 'Chatbot skills',
            title: 'Must have skills',
            excerpt: 'Learn how to build a powerful chatbot from scratch with our starterpack',
            slug: '/demo-extra-page'
        },
        {
            category: 'NLU',
            title: 'Must have skills',
            excerpt: 'Learn how to build a powerful chatbot from scratch with our starterpack',
            slug: '/demo-extra-page'
        }
    ];
    return (
        <Layout overflowX="overflow-x-hidden">
            <SEO title="Learning Center" />
            <Hero />
            <DynamicWrapper skeleton={<FeaturedPreload />}>
                <section className="relative px-4 pt-20 overflow-hidden">
                    <Featured />
                </section>
            </DynamicWrapper>
            <section className="mx-auto max-w-1320 px-4 py-12 sm:py-16">
                <div className="max-w-max mb-6 sm:mb-10 bp-menu:mb-16">
                    <p className="font-heading text-3xl sm:text-4xl text-shark">
                        <span className="border-b-4 leading-[48px]">
                            All Botpress and Chatbot Guides
                        </span>
                        <sup className="bg-ocean ml-2 text-white  pl-1.5 pt-2.5 h-5 w-5 text-[11px] rounded-[4px] align-top mt-3 sm:mt-2 inline-block">
                            5
                        </sup>
                    </p>
                </div>
                <Grid
                    data={data}
                    gridClasses="grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4"
                    arrow="true"
                />
            </section>
        </Layout>
    );
};

export default Homepage;
