const MenuClose = ({ background, color }) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill={background}
        />
        <path
            d="M11.6 20H28.4"
            stroke={color}
            strokeWidth="1.25"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

MenuClose.defaultProps = {
    background: '#CAD7F5',
    color: '#3276EA'
};

export default MenuClose;
