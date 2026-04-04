import "./index.css"
import { useState } from "react"
import SideBar from "./components/SideBar"
import Headers from "./components/Headers"
import ManageTask from "./components/ManageTask"

// biến khởi tạo chứa dữ liệu mẫu cho các công việc,
// mỗi công việc có id, tiêu đề, mức độ ưu tiên, trạng thái và thời gian hoàn thành.
const initialTasks = [
    {
        id: 1,
        title: "Hoàn thiện bài viết UI/UX",
        priority: "high",
        status: "doing",
        time: "09:00 AM",
    },
    {
        id: 2,
        title: "Kiểm tra email đối tác",
        priority: "medium",
        status: "doing",
        time: "04:30 PM",
    },
    {
        id: 3,
        title: "Đặt lịch bảo trì máy tính",
        priority: "low",
        status: "completed",
        time: "11:00 AM",
    },
]

export default function App() {
    const [tasks, setTasks] = useState(initialTasks)
    const [filter, setFilter] = useState("Tất cả")

    return (
        <div className="flex h-screen">
            <SideBar />
            <main className="w-full">
                <Headers />
                <div className="bg-[#f6f9ff]">
                    <ManageTask
                        tasks={tasks}
                        filter={filter}
                        setFilter={setFilter}
                    />
                </div>
            </main>
        </div>
    )
}

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
