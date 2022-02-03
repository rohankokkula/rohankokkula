const Arrow = ({ down, background, arrow, bgClass, arrowClass, className }) => (
    <svg
        className={`transition ease-in-out duration-150 transform ${
            down ? 'rotate-90' : ''
        } ${className}`}
        width="20"
        height="20"
        viewBox="0 0 20 20">
        <rect className={bgClass} y="9.53674e-07" width="20" height="20" rx="4" fill={background} />
        <path
            className={arrowClass}
            d="M8 7L11.2882 10.2118L8 13.5"
            fill="transparent"
            stroke={arrow}
            strokeWidth="2"
            strokeMiterlimit="10"
        />
    </svg>
);

Arrow.defaultProps = {
    down: false,
    background: '#fff',
    arrow: '#3276EA',
    bgClass: '',
    arrowClass: '',
    className: ''
};

export default Arrow;
