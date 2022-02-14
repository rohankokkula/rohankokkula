const Description = ({ description }) => {
    return (
        <div className="p-8 bg-gray-separator bg-opacity-50 rounded-2xl ">
            <p className="text-xl font-heading mb-4 text-shark">More Aboout This Template</p>
            <div className="font-semibold text-sm text-shark">{description}</div>
        </div>
    );
};

export default Description;
