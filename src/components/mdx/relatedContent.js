const RelatedContent = ({ children }) => {
    return (
        <div className="py-4">
            <p className="font-bold text-left mb-3">Related Content</p>
            {children}
        </div>
    );
};

export default RelatedContent;
