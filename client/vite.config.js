export default {
  build: {
    chunkSizeWarningLimit: 1000, // Set a larger limit (in KB)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "lodash"], // Example of manual chunking
        },
      },
    },
  },
};
