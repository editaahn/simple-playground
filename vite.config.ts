import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@utils",
        replacement: "/src/utils"
      },
      {
        find: "@apis",
        replacement: "/src/apis"
      },
      {
        find: "@libs",
        replacement: "/src/libs"
      },
      {
        find: "@contexts",
        replacement: "/src/contexts"
      },
    ],
  },
});
