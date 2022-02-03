import SearchIcon from '../icons/search';
import CrossIcon from '../icons/cross';

const Input = ({ query, setQuery }) => {
    return (
        <div className="flex items-center w-full border border-slate-700 rounded-md">
            <div className="flex items-center justify-center text-slate-800 p-1">
                <SearchIcon />
            </div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="py-2 pr-2 w-full rounded-tr-md rounded-br-md focus:outline-none"
                placeholder="Search for tutorials, videos, blogs, templates..."
            />
            {query !== '' && (
                <button
                    className="flex items-center justify-center p-1 mr-1 rounded-full bg-seashell hover:bg-red-50"
                    onClick={() => setQuery('')}>
                    <CrossIcon />
                </button>
            )}
        </div>
    );
};

export default Input;
