import dynamic from 'next/dynamic';
import { useState } from 'react';
// Hooks
import useAlgoliaSearch from '../../hooks/useAlgoliaSearch';
// Components
import Input from './input';
const SearchResults = dynamic(() => import('./searchResults.js'), { ssr: false });

const Search = ({ classes, type }) => {
    const [query, setQuery] = useState('');
    const hits = useAlgoliaSearch(query);

    return (
        <div className={`relative  ${classes}`}>
            <Input query={query} setQuery={setQuery} type={type} />
            {hits.hits.length ? <SearchResults hits={hits.hits} /> : null}
        </div>
    );
};

export default Search;
