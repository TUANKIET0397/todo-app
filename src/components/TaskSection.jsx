import TaskCard from "./TaskCard"

const TaskSection = ({ title, tasks }) => {
    return (
        <div className="mb-10">
            <h2 className="mb-4 font-bold text-[20px]">{title}</h2>

            <div className="grid grid-cols-2 gap-4">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    )
}

export default TaskSection
