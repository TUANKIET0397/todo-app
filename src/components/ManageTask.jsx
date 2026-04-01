import { useState } from "react"

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

const DetailTasks = () => {
    return (
        <>
            <h3>Ưu tiên cao (3)</h3>
            <h3>Mức độ trung bình (2)</h3>
            <h3>Mức độ thấp (1)</h3>
        </>
    )
}

export default function () {
    const [activeFilter, setActiveFilter] = useState("Tất cả")
    const handleClick = (label) => {
        setActiveFilter(label)
    }

    return (
        <>
            <div className="flex gap-4 py-[36px] px-[40px]">
                <FilterButton
                    onClick={() => handleClick("Tất cả")}
                    label="Tất cả"
                    isActive={activeFilter === "Tất cả"}
                />
                <FilterButton
                    onClick={() => handleClick("Ưu tiên cao")}
                    label="Ưu tiên cao"
                    isActive={activeFilter === "Ưu tiên cao"}
                />
                <FilterButton
                    onClick={() => handleClick("Đang làm")}
                    label="Đang làm"
                    isActive={activeFilter === "Đang làm"}
                />
                <FilterButton
                    onClick={() => handleClick("Hoàn thành")}
                    label="Hoàn thành"
                    isActive={activeFilter === "Hoàn thành"}
                />
            </div>
            <div className="px-[40px]">
                <DetailTasks />
            </div>
        </>
    )
}
