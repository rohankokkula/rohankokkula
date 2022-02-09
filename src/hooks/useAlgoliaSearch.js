import { useState, useEffect } from 'react';

import algoliasearch from 'algoliasearch';
const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);
export const LEARNING_CENTER_DEMO = searchClient.initIndex('learning_center_demo');

const useAlgoliaSearch = (query) => {
    const [hits, setHits] = useState([]);

    useEffect(() => {
        const handleSearch = () => {
            LEARNING_CENTER_DEMO.search(query)
                .then(({ hits }) => {
                    return setHits(hits);
                })
                .catch((err) => {
                    console.log(err, 'Err during Algolia main search');
                });
        };
        if (query) {
            handleSearch();
        } else {
            setHits([]);
        }
    }, [query]);

    return {
        hits
    };
};

export default useAlgoliaSearch;
