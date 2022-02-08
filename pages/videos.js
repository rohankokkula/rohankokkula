import { useEffect } from 'react';
import Layout from '../src/components/layout';
import SEO from '../src/components/seo';
import Search from '../src/components/search';
import Videos from '../src/components/videos';

const Videospage = () => {
    return (
        <Layout>
            <SEO title="Videos" />
            <section className="px-4 mx-auto pt-12 pb-10 sm:pb-16 sm:px-6 lg:pt-16 lg:px-8">
                <h1 className="font-heading text-3xl sm:text-5xl text-black text-center">
                    The Ultimate Guide to master Botpress
                </h1>
                <Search />
            </section>
            <section className="mx-auto max-w-screenx-xl px-4">
                <h2 className="text-3xl font-bold text-ocean -mt-3 mb-5 text-center">
                    Videos, Webinars, Presentations
                </h2>
            </section>
            <section className="mx-auto max-w-screen-xl px-4 mb-10">
                <div className="mb-6">
                    <h3 className="text-xl font-bold  mb-3">Building a cool bot</h3>
                    <Videos playlist="PLlJHGGklthGmFnbXHI6--kgJO3ZyFS9mD" />
                </div>
                <div>
                    <h3 className="text-xl font-bold  mb-3">Channel Integration</h3>
                    <Videos playlist="PLlJHGGklthGkz02pwmOMVSDyNr5hB-RBQ" />
                </div>
            </section>
        </Layout>
    );
};

export default Videospage;
