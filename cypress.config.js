import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "rqwssm",

  e2e: {
    baseUrl: "http://localhost:5173",
    viewportWidth: 1280,
    viewportHeight: 800,
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
