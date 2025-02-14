// vite.config.ts
import { defineConfig } from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/vite@4.5.9_@types+node@20.17.18/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import dts from "file:///Users/apple/Desktop/try-qk/vite-qiankun/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@20.17.18_vite@4.5.9/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/apple/Desktop/try-qk/vite-qiankun/packages/utils";
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
      external: ["dayjs"],
      output: {
        globals: {
          dayjs: "dayjs"
        }
      }
    }
  },
  plugins: [dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXBwbGUvRGVza3RvcC90cnktcWsvdml0ZS1xaWFua3VuL3BhY2thZ2VzL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYXBwbGUvRGVza3RvcC90cnktcWsvdml0ZS1xaWFua3VuL3BhY2thZ2VzL3V0aWxzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9hcHBsZS9EZXNrdG9wL3RyeS1xay92aXRlLXFpYW5rdW4vcGFja2FnZXMvdXRpbHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6IGZhbHNlLFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIC8vIENvdWxkIGFsc28gYmUgYSBkaWN0aW9uYXJ5IG9yIGFycmF5IG9mIG11bHRpcGxlIGVudHJ5IHBvaW50c1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnaW5kZXgnLFxuICAgICAgLy8gdGhlIHByb3BlciBleHRlbnNpb25zIHdpbGwgYmUgYWRkZWRcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsnZGF5anMnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgZGF5anM6ICdkYXlqcycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtkdHMoKV0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VixTQUFTLG9CQUFvQjtBQUNwWCxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBRmhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUE7QUFBQSxNQUVILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBO0FBQUEsTUFFTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLE9BQU87QUFBQSxNQUNsQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLElBQUksQ0FBQztBQUNqQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
