import Link from 'next/link';

const SearchResult = ({ hit }) => {
    return (
        <Link href={hit?.slug}>
            <a className="p-4 block hover:bg-blue-50 hover:text-ocean rounded-md">
                <p className="mb-1 font-bold ">{hit?.title ?? ''}</p>
                <p className="text-sm text-black">{hit?.description ?? ''}...</p>
            </a>
        </Link>
    );
};

export default SearchResult;
