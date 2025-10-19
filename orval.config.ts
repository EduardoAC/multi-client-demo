import { defineConfig } from "orval";

export default defineConfig({
  "pets": {
    "input": {
      "target": "https://petstore3.swagger.io/api/v3/openapi.json"
    },
    "output": {
      "target": "src/pets/client.ts",
      "workspace": "src/pets",
      "schemas": "src/pets/model",
      "mode": "split",
      "client": "react-query",
      "httpClient": "axios",
      "baseUrl": "https://api.pets.local",
      "mock": {
        "type": "msw",
        "useExamples": true
      },
      "prettier": true,
      "clean": true
    }
  },
  "store": {
    "input": {
      "target": "https://petstore3.swagger.io/api/v3/openapi.json"
    },
    "output": {
      "target": "src/store/client.ts",
      "workspace": "src/store",
      "schemas": "src/store/model",
      "mode": "split",
      "client": "axios",
      "httpClient": "axios",
      "baseUrl": "https://api.store.local",
      "mock": false,
      "prettier": true,
      "clean": true
    }
  }
});
