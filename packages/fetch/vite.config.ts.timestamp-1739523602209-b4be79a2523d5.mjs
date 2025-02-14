// vite.config.ts
import { defineConfig } from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/vite@4.5.9_@types+node@20.17.18/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@20.17.18_vite@4.5.9/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/apple/Desktop/try-qk/vite-qiankun/packages/fetch";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "index",
      // the proper extensions will be added
      fileName: "index"
    },
    rollupOptions: {
      external: ["axios", "@vueuse/core", "@arco-design/web-vue"],
      output: {
        globals: {
          axios: "axios",
          "react-dom": "reactDOM",
          "@arco-design/web-vue": "arcoDesignWebVue",
          "@vueuse/core": "vueuseCore"
        }
      }
    }
  },
  plugins: [dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXBwbGUvRGVza3RvcC90cnktcWsvdml0ZS1xaWFua3VuL3BhY2thZ2VzL2ZldGNoXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXBwbGUvRGVza3RvcC90cnktcWsvdml0ZS1xaWFua3VuL3BhY2thZ2VzL2ZldGNoL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL3RyeS1xay92aXRlLXFpYW5rdW4vcGFja2FnZXMvZmV0Y2gvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcImluZGV4XCIsXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJheGlvc1wiLCBcIkB2dWV1c2UvY29yZVwiLCBcIkBhcmNvLWRlc2lnbi93ZWItdnVlXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICBheGlvczogXCJheGlvc1wiLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwicmVhY3RET01cIixcbiAgICAgICAgICBcIkBhcmNvLWRlc2lnbi93ZWItdnVlXCI6IFwiYXJjb0Rlc2lnbldlYlZ1ZVwiLFxuICAgICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwidnVldXNlQ29yZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbZHRzKCldLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVWLFNBQVMsb0JBQW9CO0FBQ3BYLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFGaEIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUN4QyxNQUFNO0FBQUE7QUFBQSxNQUVOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxnQkFBZ0Isc0JBQXNCO0FBQUEsTUFDMUQsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2Isd0JBQXdCO0FBQUEsVUFDeEIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
