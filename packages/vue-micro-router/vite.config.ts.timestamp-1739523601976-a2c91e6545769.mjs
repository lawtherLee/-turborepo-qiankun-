// vite.config.ts
import { defineConfig } from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/vite@4.5.9_@types+node@20.17.18/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@20.17.18_vite@4.5.9/node_modules/vite-plugin-dts/dist/index.mjs";
import vue from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@4.5.9_vue@3.3.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/apple/Desktop/try-qk/vite-qiankun/packages/vue-micro-router";
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
    }
  },
  plugins: [vue(), dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXBwbGUvRGVza3RvcC90cnktcWsvdml0ZS1xaWFua3VuL3BhY2thZ2VzL3Z1ZS1taWNyby1yb3V0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL3RyeS1xay92aXRlLXFpYW5rdW4vcGFja2FnZXMvdnVlLW1pY3JvLXJvdXRlci92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYXBwbGUvRGVza3RvcC90cnktcWsvdml0ZS1xaWFua3VuL3BhY2thZ2VzL3Z1ZS1taWNyby1yb3V0ZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcbiAgICAgIG5hbWU6IFwiaW5kZXhcIixcbiAgICAgIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFt2dWUoKSwgZHRzKCldLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdYLFNBQVMsb0JBQW9CO0FBQ3JaLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBO0FBQUEsTUFFTixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
