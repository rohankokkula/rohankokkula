import SearchIcon from '../icons/search';
import CrossIcon from '../icons/cross';

const Input = ({ query, setQuery, type }) => {
    return (
        <div
            className={`flex items-center w-full border border-lightGray ${
                type === 'light' ? 'bg-white' : 'bg-shark'
            } rounded-[4px]`}>
            <div
                className={`flex items-center justify-center ${
                    type === 'light' ? 'text-shark' : 'text-white'
                }  p-1`}>
                <SearchIcon />
            </div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`py-2 pr-2 w-full rounded-tr-md rounded-br-md focus:outline-none ${
                    type === 'light' ? 'bg-white  text-shark' : 'bg-shark text-white'
                } `}
                placeholder="Search for tutorials, guides,lessons..."
            />
            {query !== '' && (
                <button
                    className="flex items-center justify-center  mr-1 rounded-full bg-seashell hover:bg-red-50"
                    onClick={() => setQuery('')}>
                    <CrossIcon />
                </button>
            )}
        </div>
    );
};

export default Input;
