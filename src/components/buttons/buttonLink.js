import PropTypes from 'prop-types';
import Arrow from '../icons/arrow';
// import Download from '../icons/download';
import ExternalLink from '../icons/externalLink';

const ButtonLink = ({
    id,
    link,
    label,
    hollow,
    transparent,
    className,
    icon,
    altCol,
    iconcolor,
    ...rest
}) => {
    const buttonClass = hollow
        ? 'border border-solid bg-transparent border-gray' +
          (transparent ? ' border-none' : ' font-semibold rounded p-2')
        : 'font-semibold rounded bg-ocean text-white p-2';

    const hoverClass = hollow
        ? transparent
            ? 'hover:text-ocean'
            : ' hover:bg-hover-ocean'
        : 'hover:text-ocean hover:bg-hover-ocean';

    return (
        <a
            id={id}
            href={link}
            className={`button-link group inline-flex items-center transition ease-in-out duration-150 whitespace-nowrap outline-none focus:outline-none ${buttonClass} ${hoverClass} ${className}`}
            {...rest}>
            <span>{label}</span>
            {icon === 'arrow' && transparent && !iconcolor && (
                <span className="ml-2">
                    <Arrow
                        bgClass={`transition ease-in-out duration-150 fill-current group-hover:text-hover-ocean ${
                            altCol ? 'text-hover-ocean' : 'text-ocean'
                        }`}
                        arrowClass={`transition ease-in-out duration-150 stroke-current group-hover:text-ocean ${
                            altCol ? 'text-black' : 'text-white'
                        }`}
                    />
                </span>
            )}
            {icon === 'arrow' && hollow && !transparent && !iconcolor && (
                <span className="ml-2">
                    <Arrow
                        bgClass={`transition ease-in-out duration-150 fill-current group-hover:text-white ${
                            altCol ? 'text-hover-ocean' : 'text-ocean'
                        }`}
                        arrowClass={`transition ease-in-out duration-150 stroke-current group-hover:text-ocean ${
                            altCol ? 'text-black' : 'text-white'
                        }`}
                    />
                </span>
            )}
            {icon === 'arrow' && !(hollow || transparent) && !iconcolor && (
                <span className="ml-2">
                    <Arrow
                        bgClass={`transition ease-in-out duration-150 fill-current group-hover:text-ocean ${
                            altCol ? 'text-hover-ocean' : 'text-white'
                        }`}
                        arrowClass={`transition ease-in-out duration-150 stroke-current group-hover:text-white ${
                            altCol ? 'text-black' : 'text-ocean'
                        }`}
                    />
                </span>
            )}
            {icon === 'arrow' && iconcolor && (
                <span className="ml-2">
                    <Arrow
                        bgClass={`transition ease-in-out duration-150 fill-current group-hover:text-ocean ${iconcolor} }`}
                        arrowClass={`transition ease-in-out duration-150 stroke-current group-hover:text-white  }`}
                    />
                </span>
            )}
            {icon === 'externalLink' && (
                <span className="ml-2">
                    <ExternalLink />
                </span>
            )}
            {/* {icon === 'download' && (
                <span className="ml-2">
                    <Download />
                </span>
            )} */}
        </a>
    );
};

ButtonLink.defaultProps = {
    hollow: false,
    transparent: false,
    className: '',
    icon: '',
    altCol: false
};

export default ButtonLink;
