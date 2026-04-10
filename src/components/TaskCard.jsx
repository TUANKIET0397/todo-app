import { FaEllipsisVertical, FaRegClock } from "react-icons/fa6"

const PRIORITY_STYLES = {
    high: {
        badge: "bg-red-100 text-red-500",
        checkbox: "accent-red-500 border-red-300 checked:border-red-500",
        card: "border-l-4 border-red-500",
    },
    medium: {
        badge: "bg-blue-100 text-blue-500",
        checkbox: "accent-blue-500 border-blue-300 checked:border-blue-500",
        card: "border-l-4 border-blue-400",
    },
    low: {
        badge: "bg-green-100 text-green-500",
        checkbox: "accent-green-500 border-green-300 checked:border-green-500",
        card: "border-l-4 border-green-400",
    },
}

const TaskCard = ({ task }) => {
    const styles = PRIORITY_STYLES[task.priority] || PRIORITY_STYLES.low

    return (
        <div className={`rounded-2xl shadow bg-white p-5 ${styles.card}`}>
            <div className="relative flex items-center justify-between gap-3">
                <input
                    type="checkbox"
                    className={`peer h-5 w-5 rounded border ${styles.checkbox}`}
                />
                <div className="peer-checked:text-gray-500 peer-checked:line-through w-full font-bold text-[18px]">
                    {task.title}
                    <p className=" text-gray-500 font-normal text-sm mt-1">
                        {" "}
                        {task.desc}
                    </p>
                </div>

                <FaEllipsisVertical className="absolute right-0 peer-checked:hidden pl-3" />
            </div>

            <div className="mt-3 text-gray-600">{task.description}</div>

            <div className="mt-4 flex items-center gap-3">
                <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${styles.badge}`}
                >
                    {task.priority.toUpperCase()}
                </span>

                <span className="flex items-center text-gray-700 font-normal text-sm mt-1 gap-1">
                    <FaRegClock />
                    {task.time}
                </span>
            </div>
        </div>
    )
}

export default TaskCard
