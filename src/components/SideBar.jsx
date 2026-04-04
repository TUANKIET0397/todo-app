import { logo, dashboard, today, thisWeek, settings, add } from "../assets/icons"

function NavItem({ icon, label, active }) {
    return (
        <div
            className={`flex gap-3 pl-4 py-3 hover:bg-[#004AC6]/10 
        ${active ? "bg-[#004AC6]/10 text-[#004AC6]" : "text-[#64748B]"}`}
        >
            <img width={20} src={icon} alt={label} />
            <p
                className={`antialiased text-base font-medium tracking-wider 
            ${active ? "text-[#004AC6]" : "text-[#64748B]"}
            `}
            >
                {label}
            </p>
        </div>
    )
}

function ButtonEdit({ onclick, icon, label }) {
    return (
        <button
            onClick={onclick}
            className="flex justify-center items-center w-[190px] gap-2 px-2 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
            <img src={icon} alt={label} className="w-3 h-3" />
            <span className="font-semibold text-[14px]">{label}</span>
        </button>
    )
}

const handleCreate = () => alert("Create Task")

export default function () {
    return (
        <>
            <aside className="flex flex-col justify-between w-[260px] h-full px-6 py-6">
                <div>
                    <header>
                        <img
                            width={270}
                            height={43}
                            src={logo}
                            alt="Task Master"
                        />
                    </header>
                    <nav className="flex flex-col mt-[48px] gap-y-1">
                        <NavItem icon={dashboard} label="Dashboard" />
                        <NavItem icon={today} label="today" active="true" />
                        <NavItem icon={thisWeek} label="thisWeek" />
                        <NavItem icon={settings} label="settings" />
                    </nav>
                </div>
                <ButtonEdit
                    onclick={handleCreate}
                    icon={add}
                    label="Create Task"
                />
            </aside>
        </>
    )
}
