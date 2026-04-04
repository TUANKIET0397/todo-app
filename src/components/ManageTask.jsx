const FilterButton = ({ onClick, label, isActive }) => {
    return (
        <>
            <button
                type="submit"
                onClick={onClick}
                className={`${isActive ? "bg-[#004AC6] text-white font-bold " : "bg-[#dfe3e9] text-[#434655] font-semibold"} rounded-full px-5 h-[38px] text-base`}
            >
                {label}
            </button>
        </>
    )
}

const TaskList = ({ filter, tasks }) => {
    const getTasksByFilter = () => {
        switch (filter) {
            case "Tất cả":
                return tasks
            case "Ưu tiên cao":
                return tasks.filter((task) => task.priority === "high")
            case "Đang làm":
                return tasks.filter((task) => task.status === "doing")
            case "Hoàn thành":
                return tasks.filter((task) => task.status === "completed")
            default:
                return tasks
        }
    }

    const handleDesc = (length, filter) => {
        
    }

    const filteredTasks = getTasksByFilter()

    return (
        <div className="px-[40px] py-[16px]">
            {filteredTasks.map((task) => (
                <div key={task.id} className="grid gap-4 mb-4 p-4">
                    <div>{handleDesc(filteredTasks.length, filter.priority)}</div>
                    <div>{task.title}</div>
                    <div>{task.priority}</div>
                    <div>{task.status}</div>
                    <div>{task.time}</div>
                </div>
            ))}
        </div>
    )
}

// <>
//     <div>Ưu tiên cao</div>
//     <div>Mức độ trung bình</div>
//     <div>Mức độ thấp</div>
// </>

export default function ManageTask({ tasks, setTasks, filter, setFilter }) {
    return (
        <>
            <div className="flex gap-4 py-[36px] px-[40px]">
                <FilterButton
                    onClick={() => setFilter("Tất cả")}
                    label="Tất cả"
                    isActive={filter === "Tất cả"}
                />
                <FilterButton
                    onClick={() => setFilter("Ưu tiên cao")}
                    label="Ưu tiên cao"
                    isActive={filter === "Ưu tiên cao"}
                />
                <FilterButton
                    onClick={() => setFilter("Đang làm")}
                    label="Đang làm"
                    isActive={filter === "Đang làm"}
                />
                <FilterButton
                    onClick={() => setFilter("Hoàn thành")}
                    label="Hoàn thành"
                    isActive={filter === "Hoàn thành"}
                />
            </div>
            <TaskList filter={filter} tasks={tasks} />
        </>
    )
}
