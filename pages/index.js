import Layout from '../src/components/layout';
import SEO from '../src/components/seo';
import Search from '../src/components/search';
import Grid from '../src/components/grid';

const Homepage = () => {
    let dummyDataOne = [
        {
            title: 'Getting Started',
            excerpt: 'Learn how to build a powerful chatbot from scratch with our starterpack.',
            slug: '/getting-started'
        },
        {
            title: 'Videos, webinars...',
            excerpt: 'Missed a webinar? We got your back! Get access to our webinars & videos.',
            slug: '/video-tutorial'
        },
        {
            title: 'Bot Templates',
            excerpt: 'ready-to-import chatbot templates as per use-case for you to save time!'
        }
    ];

    let dummyDataTwo = [
        {
            title: 'Must-have skills',
            excerpt:
                'Understand Conversational AI with Botpress in depth with well curated 160 skills'
        },
        {
            title: 'NLP vs NLU',
            excerpt: 'How it works, and the different applications it can have for businesses.'
        },
        {
            title: 'Lorem ipsum',
            excerpt: 'ready-to-import chatbot templates as per use-case for you to save time!'
        }
    ];

    return (
        <Layout>
            <SEO title="Learning Center" />
            <section className="px-4 mx-auto pt-12 pb-10 sm:pb-16 sm:px-6 lg:pt-16 lg:px-8">
                <h1 className="font-heading text-3xl sm:text-5xl text-black text-center">
                    The Ultimate Guide to master Botpress
                </h1>
                <Search />
            </section>
            <section className="mx-auto max-w-screen-xl px-4 mb-10">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-ocean mb-3">
                        Understand Botpress Better
                    </h2>
                    <Grid
                        data={dummyDataOne}
                        gridClasses="grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4"
                        arrow="orange"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-ocean mb-3">
                        Guides for becoming a great Chatbot Developer
                    </h2>
                    <Grid
                        data={dummyDataTwo}
                        gridClasses="grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4"
                    />
                </div>
            </section>
        </Layout>
    );
};

export default Homepage;
