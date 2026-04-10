// Import TaskSection so JSX references resolve and avoid ReferenceError at runtime.
import TaskSection from "./TaskSection"
import { IoMdAdd } from "react-icons/io"

const FilterButton = ({ onClick, label, isActive }) => {
    return (
        <>
            <button
                type="button"
                onClick={onClick}
                className={`${isActive ? "bg-[#004AC6] text-white font-bold " : "bg-[#dfe3e9] text-[#434655] font-semibold"} rounded-full px-5 h-[38px] text-base`}
            >
                {label}
            </button>
        </>
    )
}

const TaskList = ({ filter, tasks }) => {
    // Lọc công việc dựa trên filter đã chọn
    const getTasksByFilter = (filter, tasks) => {
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

    // Nhóm công việc theo mức độ ưu tiên
    // Hàm này sẽ trả về một đối tượng chứa 3 mảng: high, medium, low,
    // mỗi mảng chứa các công việc tương ứng với mức độ ưu tiên đó.
    // dùng object để lưu trữ các nhóm công việc giúp dễ dàng truy cập và hiển thị sau này.
    const groupTasksByPriority = (tasks) => {
        return {
            high: tasks.filter((task) => task.priority === "high"),
            medium: tasks.filter((task) => task.priority === "medium"),
            low: tasks.filter((task) => task.priority === "low"),
        }
    }

    // Lấy danh sách công việc đã lọc theo filter
    const filteredTasks = getTasksByFilter(filter, tasks)

    // Nếu filter là "Tất cả", nhóm công việc theo mức độ ưu tiên và hiển thị từng nhóm
    if (filter === "Tất cả") {
        const groupedTasks = groupTasksByPriority(filteredTasks)

        return (
            <div className="px-[40px] py-[16px]">
                {groupedTasks.high.length > 0 && (
                    <TaskSection
                        title={`ƯU TIÊN CAO (${groupedTasks.high.length})`}
                        tasks={groupedTasks.high}
                    />
                )}

                {groupedTasks.medium.length > 0 && (
                    <TaskSection
                        title={`MỨC ĐỘ TRUNG BÌNH (${groupedTasks.medium.length})`}
                        tasks={groupedTasks.medium}
                    />
                )}

                {groupedTasks.low.length > 0 && (
                    <TaskSection
                        title={`MỨC ĐỘ THẤP (${groupedTasks.low.length})`}
                        tasks={groupedTasks.low}
                    />
                )}
            </div>
        )
    }

    // Nếu filter không phải "Tất cả", hiển thị tất cả công việc đã lọc mà không cần nhóm
    return (
        <div className="px-[40px] py-[16px]">
            <TaskSection
                title={`${filter} (${filteredTasks.length})`}
                tasks={filteredTasks}
            />
        </div>
    )
}

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
            {/* Hiển thị danh sách công việc dựa trên filter đã chọn */}
            <TaskList filter={filter} tasks={tasks} className="relative" />

            <button
                onClick={() => alert("Create Task")}
                type="submit"
                aria-label="Add task"
                className="fixed bottom-10 right-10 flex h-[56px] w-[56px] items-center justify-center rounded-lg bg-blue-300 text-white hover:bg-blue-400"
            >
                <IoMdAdd className="text-[35px]" />
            </button>
        </>
    )
}
