import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../src/components/layout';
import SEO from '../src/components/seo';
import { MdxComponents } from '../src/components/mdx';

const Slug = ({ frontMatter, slug, mdxSource }) => {
    return (
        <Layout>
            <SEO title={frontMatter.title} />
            <section className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12">
                <MDXRemote {...mdxSource} components={MdxComponents} />
            </section>
        </Layout>
    );
};

export async function getStaticPaths() {
    // Read the files inside the pages/posts dir
    const files = fs.readdirSync(path.join('markdown-pages'));

    // Generate path for each file
    const paths = files.map((file) => {
        return {
            params: {
                slug: file.replace('.mdx', '')
            }
        };
    });

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params: { slug } }) {
    // read each file
    const markdown = fs.readFileSync(path.join('markdown-pages', slug + '.mdx'), 'utf-8');

    // Extract front matter
    const { data: frontMatter, content } = matter(markdown);

    const mdxSource = await serialize(content);

    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    };
}

export default Slug;
