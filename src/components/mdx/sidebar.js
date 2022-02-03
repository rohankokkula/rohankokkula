import ButtonLink from '../buttons/buttonLink';

const Sidebar = ({ children }) => {
    return (
        <div className="relative">
            <div
                className="p-6 border border-gray rounded-xl fixed grid grid-cols-1"
                style={{ top: 88, gridTemplateRows: '1fr auto', height: 'calc(100vh - 104px)' }}>
                <div>{children}</div>
                <div>
                    <ButtonLink
                        link="https://botpress.com/free-trial"
                        label="Download Open-Source"
                        hollow={false}
                        transparent={false}
                        className="font-bold text-white z-10"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
