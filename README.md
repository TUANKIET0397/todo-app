# Cấu trúc dự án fullstack

project-root/
│
├── frontend/ # Phần giao diện (React + Vite + Tailwind)
│ ├── public/ # Static assets (favicon, images)
│ ├── src/
│ │ ├── components/ # Các component tái sử dụng (Button, TodoItem, Modal...)
│ │ ├── pages/ # Các trang chính (Home, Login, Dashboard...)
│ │ ├── layouts/ # Layout tổng thể (Header, Sidebar, Footer)
│ │ ├── hooks/ # Custom hooks (useAuth, useFetch...)
│ │ ├── context/ # React Context (AuthContext, ThemeContext...)
│ │ ├── services/ # API call (axios, fetch)
│ │ ├── styles/ # File CSS gốc, Tailwind config
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── tailwind.config.js # Config Tailwind
│ ├── package.json
│ └── vite.config.js
│
├── backend/ # Phần server (Node.js/Express/NestJS)
│ ├── src/
│ │ ├── controllers/ # Xử lý request (TodoController, UserController...)
│ │ ├── models/ # Mô hình dữ liệu (MongoDB, SQL)
│ │ ├── routes/ # Định nghĩa API routes
│ │ ├── middleware/ # Middleware (auth, logging...)
│ │ ├── services/ # Business logic (TodoService, AuthService...)
│ │ └── index.js # Entry point server
│ ├── package.json
│ └── .env # Config môi trường (DB_URL, SECRET_KEY...)
│
├── docs/ # Tài liệu dự án (README, API docs, thiết kế)
├── .gitignore
└── README.md

## lý do nhẹ

```bash
- Frontend: React + Tailwind → lo phần UI, logic hiển thị.

- Backend: Node.js/Express → lo API, database, xử lý nghiệp vụ.

- Tách riêng: dễ quản lý, dễ deploy (frontend có thể host trên Vercel/Netlify, backend trên server khác).
```
