const Item = ({ label, sub }) => {
    return (
        <span
            className={`cursor-pointer py-2 block transition duration-150 ease-in-out ${
                sub ? 'hover:text-lighthouse' : 'hover:text-ocean'
            }`}>
            {label}
        </span>
    );
};

export default Item;
