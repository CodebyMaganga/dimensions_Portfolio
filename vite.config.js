import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        darkMode: "class", // or "media"
        theme: {
          extend: {
            colors: {
              brand: "#00E5FF",
              accent: "#FFD700",
            },
            backgroundImage: {
              'african-pattern': "url('/src/assets/african.jpg')",
            },
          },
        },
      },
    }),
  ],
})
