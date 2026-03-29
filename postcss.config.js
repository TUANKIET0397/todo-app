export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}), // dùng trong config để tự động thêm cssnano khi build production.
    },
}
