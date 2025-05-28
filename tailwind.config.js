// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customDark: '#1D2026', // أو rgba(29, 32, 38, 1)
            },
        },
    },
    plugins: [],
}