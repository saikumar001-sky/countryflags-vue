import { defineConfig } from "vite";
import path from 'path'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // tell the build process to treat this project as library
      entry: path.resolve(__dirname, "src/App.vue"),
      name: "country-flags-vue",
      fileName: (format)=>`country-flags-vue.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
