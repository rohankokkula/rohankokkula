import ButtonLink from '../../../buttons/buttonLink';
import LeadGen from '../../../icons/leadGen';

const Header = ({ title, text, icon }) => {
    return (
        <div className="grid grid-cols-1 gap-y-5">
            <div>
                <LeadGen />
                <p className="font-heading text-4xl mt-1">{title}</p>
            </div>
            <p className="text-[14px] leading-[20px] font-semibold">{text}</p>
            <div>
                <ButtonLink
                    link="https://botpress.com/free-trial"
                    label="Get this template"
                    hollow={false}
                    transparent={false}
                    className="font-heading text-white"
                    icon={false}
                />
            </div>
        </div>
    );
};

export default Header;
