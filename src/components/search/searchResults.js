import SearchResult from './searchResult';

const SearchResults = ({ hits }) => {
    return (
        <div className="absolute p-4 bg-white border border-gray border-opacity-30 rounded-md mt-2 w-full z-10 shadow-lg">
            <p className="px-2 text-sm mb-2">Results: {hits.length}</p>
            {hits.map((hit) => (
                <SearchResult hit={hit} key={hit?.id} />
            ))}
        </div>
    );
};

export default SearchResults;
