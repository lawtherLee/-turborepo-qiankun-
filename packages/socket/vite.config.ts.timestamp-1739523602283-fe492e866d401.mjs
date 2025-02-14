// vite.config.ts
import { defineConfig } from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/vite@4.5.9_@types+node@20.17.18/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@20.17.18_vite@4.5.9/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/apple/Desktop/try-qk/vite-qiankun/packages/socket";
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
      external: [
        "@vueuse/core",
        "@vueuse/shared",
        "nanoid",
        "@arco-design/web-vue",
        "axios",
        "socket.io-client"
      ],
      output: {
        globals: {
          axios: "axios",
          "@arco-design/web-vue": "arcoDesignWebVue",
          "@vueuse/core": "vueuseCore",
          "@vueuse/shared": "vueuseShared",
          nanoid: "nanoid",
          "socket.io-client": "socketIoClient"
        }
      }
    }
  },
  plugins: [dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXBwbGUvRGVza3RvcC90cnktcWsvdml0ZS1xaWFua3VuL3BhY2thZ2VzL3NvY2tldFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FwcGxlL0Rlc2t0b3AvdHJ5LXFrL3ZpdGUtcWlhbmt1bi9wYWNrYWdlcy9zb2NrZXQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FwcGxlL0Rlc2t0b3AvdHJ5LXFrL3ZpdGUtcWlhbmt1bi9wYWNrYWdlcy9zb2NrZXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmMvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcImluZGV4XCIsXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCIsXG4gICAgICAgIFwiQHZ1ZXVzZS9zaGFyZWRcIixcbiAgICAgICAgXCJuYW5vaWRcIixcbiAgICAgICAgXCJAYXJjby1kZXNpZ24vd2ViLXZ1ZVwiLFxuICAgICAgICBcImF4aW9zXCIsXG4gICAgICAgIFwic29ja2V0LmlvLWNsaWVudFwiLFxuICAgICAgXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgYXhpb3M6IFwiYXhpb3NcIixcbiAgICAgICAgICBcIkBhcmNvLWRlc2lnbi93ZWItdnVlXCI6IFwiYXJjb0Rlc2lnbldlYlZ1ZVwiLFxuICAgICAgICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwidnVldXNlQ29yZVwiLFxuICAgICAgICAgIFwiQHZ1ZXVzZS9zaGFyZWRcIjogXCJ2dWV1c2VTaGFyZWRcIixcbiAgICAgICAgICBuYW5vaWQ6IFwibmFub2lkXCIsXG4gICAgICAgICAgXCJzb2NrZXQuaW8tY2xpZW50XCI6IFwic29ja2V0SW9DbGllbnRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW2R0cygpXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixTQUFTLG9CQUFvQjtBQUN2WCxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBRmhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBO0FBQUEsTUFFTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLHdCQUF3QjtBQUFBLFVBQ3hCLGdCQUFnQjtBQUFBLFVBQ2hCLGtCQUFrQjtBQUFBLFVBQ2xCLFFBQVE7QUFBQSxVQUNSLG9CQUFvQjtBQUFBLFFBQ3RCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQ2pCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
