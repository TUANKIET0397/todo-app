import { useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
    const [todos, setTodos] = useState([])

    function addTodo(job) {
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), text: job, completed: false },
        ])
    }

    function deleteTodo(id) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    function toggleTodo(id) {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        )
    }

    return (
        <div>
            <h1>To Do App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
            />
        </div>
    )
}

export default App

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
