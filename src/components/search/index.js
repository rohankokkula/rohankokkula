import { useState } from 'react';
import Input from './input';

const Search = () => {
    const [query, setQuery] = useState('');
    return (
        <div className="max-w-screen-md mx-auto mt-6 sm:mt-8">
            <Input query={query} setQuery={setQuery} />
        </div>
    );
};

export default Search;
