import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  types: ["vite/client"],
  plugins: [
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@colors": "/src/colors",
      // '@context':'/src/contexts/AppContext.jsx',
    },
  },
});
