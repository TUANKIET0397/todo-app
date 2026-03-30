import "./index.css"
import { logo, dashboard, today, thisWeek, settings, add } from "./assets/icons"

function NavItem({ icon, label, active = false }) {
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

function handbleCreate() {
    return alert("Click rồi ní ơi😊")
}

export default function App() {
    return (
        <div className="flex h-screen">
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
                    onclick={handbleCreate}
                    icon={add}
                    label="Create Task"
                />
            </aside>
            <main>Bên phải</main>
        </div>
    )
}

// import { useState } from "react"
// import TodoForm from "./components/TodoForm"
// import TodoList from "./components/TodoList"

// function App() {
//     const [todos, setTodos] = useState([])

//     function addTodo(job) {
//         setTodos((prev) => [
//             ...prev,
//             { id: Date.now(), text: job, completed: false },
//         ])
//     }

//     function deleteTodo(id) {
//         setTodos((prev) => prev.filter((todo) => todo.id !== id))
//     }

//     function toggleTodo(id) {
//         setTodos((prev) =>
//             prev.map((todo) =>
//                 todo.id === id ? { ...todo, completed: !todo.completed } : todo,
//             ),
//         )
//     }

//     return (
//         <div>
//             <h1>To Do App</h1>
//             <TodoForm addTodo={addTodo} />
//             <TodoList
//                 todos={todos}
//                 deleteTodo={deleteTodo}
//                 toggleTodo={toggleTodo}
//             />
//         </div>
//     )
// }

// export default App

// import { useState } from "react"

// function App() {
//     //JSON.parse: chuyển đổi chuổi JSON thành dạng đối tượng, cụ thể ở đây là mảng
//     //JSON.stringify: chuyển đổi một đối tượng JavaScript thành một chuỗi JSON,
//     // cụ thể ở đây là mảng jobs thành chuỗi JSON để lưu trữ trong localStorage.

//     // lấy dữ liệu từ localStorage, nếu có, và chuyển đổi nó từ chuỗi JSON thành mảng JavaScript.
//     // Nếu không có dữ liệu nào được lưu trữ, nó sẽ trả về null.

//     const [job, setJob] = useState("")
//     const [jobs, setJobs] = useState(() => {
//         // Sử dụng hàm khởi tạo để chỉ đọc dữ liệu từ localStorage một lần khi component được khởi tạo.
//         const storedJobs = localStorage.getItem("jobs")
//         const parsedJobs = storedJobs ? JSON.parse(storedJobs) : []
//         return parsedJobs
//     })

//     const handleSubmit = () => {
//         setJobs((prev) => {
//             const newJob = [...prev, job]

//             // Lưu trữ mảng jobs vào localStorage dưới dạng chuỗi JSON, vì localStorage chỉ hỗ trợ lưu trữ dữ liệu dưới dạng chuỗi.
//             const jsonJobs = JSON.stringify(newJob)
//             localStorage.setItem("jobs", jsonJobs)

//             return newJob
//         })
//         setJob("")

//         // console.log(jobs) // Lưu ý: jobs sẽ không được cập nhật ngay lập tức sau khi gọi setJobs,
//         // vì setState là một hàm bất đồng bộ. Do đó, console.log(jobs) sẽ in ra giá trị cũ của jobs trước khi nó được cập nhật với job mới.
//     }

//     return (
//         <div style={{ padding: 32, margin: "0 auto", maxWidth: 400 }}>
//             <h1>To-Do List</h1>
//             <form onSubmit={(e) => e.preventDefault()}>
//                 <input value={job} onChange={(e) => setJob(e.target.value)} />
//                 <button onClick={handleSubmit}>Add</button>
//                 <ul style={{ listStyleType: "none", padding: 0 }}>
//                     {jobs.map((job, index) => {
//                         return <li key={index}>{job}</li>
//                     })}
//                 </ul>
//             </form>
//         </div>
//     )
// }
// export default App
