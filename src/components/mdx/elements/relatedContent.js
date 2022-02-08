import ButtonLink from '../../buttons/buttonLink';

const RelatedContent = ({ children, classes }) => {
    return (
        <div className={`h-max ${classes}`}>
            <div className="mb-5">
                <p className="font-bold mb-3">Related Content</p>
                <hr className="border-gray-separator" />
            </div>
            {children}
            <hr className="border-gray-separator mb-3" />
            <p className="font-bold mb-3">Resources</p>
            <div>
                <ButtonLink
                    link="https://botpress.com/free-trial"
                    label="Download Starterbot"
                    hollow={false}
                    transparent={false}
                    className="font-bold text-white z-10 w-full justify-center"
                />
            </div>
        </div>
    );
};

export default RelatedContent;
