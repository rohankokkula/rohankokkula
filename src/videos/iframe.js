import Image from 'next/image';

const Iframe = ({ id, snippet }) => {
    return (
        <div className="relative rounded-lg mb-3">
            <a
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noreferrer"
                className="absolute left-0 right-0 w-full h-full z-10"></a>
            {/* <div className="rounded-lg ">
                <Image
                    width={360}
                    height={240}
                    src={snippet?.thumbnails?.high?.url}
                    layout="fixed"
                    className="rounded-lg"
                    style={{ borderRadius: 8 }}
                />
            </div> */}
            <iframe
                width="380"
                height="214"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border border-gray rounded-lg"
            />
        </div>
    );
};

export default Iframe;
