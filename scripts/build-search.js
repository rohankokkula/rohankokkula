// build-search.js
const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch/lite');
const fs = require('fs');
const matter = require('gray-matter');
const path = require('path');
const { convert } = require('html-to-text');

async function readMarkdownFiles() {
    let fileNames = [];
    let data = [];

    fs.readdirSync('./markdown-pages/').forEach((file) => {
        return fileNames.push(file);
    });

    fileNames.map((file) => {
        const markdown = fs.readFileSync(path.join('markdown-pages', file), 'utf-8');

        const { data: frontMatter, content } = matter(markdown);
        const body = convert(content);

        frontMatter['body'] = body;

        return data.push(frontMatter);
    });

    return data;
}

function transformDataToSearchObjs(data) {
    const transformed = data.map((val) => {
        return {
            objectID: val.id,
            title: val.title,
            description: val.description,
            slug: val.slug,
            body: val.body
        };
    });

    return transformed;
}

(async function () {
    // initialize environment variables
    dotenv.config();

    try {
        const data = await readMarkdownFiles();
        const transformed = transformDataToSearchObjs(data);

        const client = algoliasearch(
            process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
            process.env.ALGOLIA_SEARCH_ADMIN_KEY
        );

        const index = client.initIndex('learning_center_demo');
        const algoliaResponse = await index.saveObjects(transformed);

        console.log(
            `Sucessfully added ${
                algoliaResponse.objectIDs.length
            } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join('\n')}`
        );
    } catch (err) {
        console.log(err);
    }
})();
