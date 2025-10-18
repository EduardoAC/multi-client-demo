import { defineConfig } from "orval";

export default defineConfig({
  "pets": {
    "input": {
      "target": "https://petstore3.swagger.io/api/v3/openapi.json"
    },
    "output": {
      "target": "./src/pets/client.ts",
      "workspace": "./src/pets",
      "schemas": "model",
      "mode": "split",
      "client": "react-query",
      "baseUrl": "https://api.pets.local",
      "mock": true,
      "prettier": true,
      "clean": true
    }
  },
  "store": {
    "input": {
      "target": "https://petstore3.swagger.io/api/v3/openapi.json"
    },
    "output": {
      "target": "./src/store/client.ts",
      "workspace": "./src/store",
      "schemas": "model",
      "mode": "split",
      "client": "axios",
      "baseUrl": "https://api.store.local",
      "mock": false,
      "prettier": true,
      "clean": true
    }
  }
});
