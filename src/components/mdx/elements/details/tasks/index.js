import Task from './task';

const Tasks = ({ tasks }) => {
    return (
        <div>
            <p className="text-xl font-heading mb-3">Key Tasks</p>
            <div className="grid grid-cols-1 gap-2">
                {tasks?.map((task) => (
                    <Task key={task} task={task} />
                ))}
            </div>
        </div>
    );
};

export default Tasks;
