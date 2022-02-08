const Item = ({ label }) => {
    return (
        <span className="cursor-pointer py-2 block transition duration-150 ease-in-out hover:text-ocean">
            {label}
        </span>
    );
};

export default Item;
