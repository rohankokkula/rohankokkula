const Iframe = ({ src, title }) => {
    return (
        <div
            style={{
                paddingBottom: '55%'
            }}
            className="w-full h-0 relative mb-4">
            <div className="absolute w-full h-full z-50 bg-transparent"></div>
            <iframe
                title={title ?? 'Botpress'}
                src={src}
                width="100%"
                height="100%"
                style={{ position: 'absolute' }}
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen></iframe>
        </div>
    );
};

export default Iframe;
