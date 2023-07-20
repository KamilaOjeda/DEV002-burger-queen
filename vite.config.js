import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  basename: "/lanana-restaurant/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["firebase/compat/app"],
    },
  },
});
