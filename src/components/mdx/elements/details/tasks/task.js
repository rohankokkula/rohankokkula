const Task = ({ task }) => {
    return (
        <div className="block cursor-pointer">
            <div className="cursor-pointer">
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="form-checkbox border border-black h-5 w-5 rounded-[4px] cursor-pointer"
                    />
                    <span className="ml-3 cursor-pointer">{task}</span>
                </label>
            </div>
        </div>
    );
};

export default Task;
