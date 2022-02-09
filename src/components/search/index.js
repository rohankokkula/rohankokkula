import dynamic from 'next/dynamic';
import { useState } from 'react';
// Hooks
import useAlgoliaSearch from '../../hooks/useAlgoliaSearch';
// Components
import Input from './input';
const SearchResults = dynamic(() => import('./searchResults.js'), { ssr: false });

const Search = () => {
    const [query, setQuery] = useState('');
    const hits = useAlgoliaSearch(query);

    return (
        <div className="max-w-screen-md mx-auto mt-6 sm:mt-8 relative">
            <Input query={query} setQuery={setQuery} />
            {hits.hits.length ? <SearchResults hits={hits.hits} /> : null}
        </div>
    );
};

export default Search;
