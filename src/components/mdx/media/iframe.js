const Iframe = ({ src, title }) => {
    return (
        <div
            style={{
                paddingBottom: '55%'
            }}
            className="w-full h-0 relative mb-5 mt-6">
            <iframe
                title={title ?? 'Botpress'}
                src={src}
                width="100%"
                height="100%"
                style={{ position: 'absolute' }}
                frameBorder="0"
                className="rounded-md"
                allowFullScreen></iframe>
        </div>
    );
};

export default Iframe;
