import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: "production",     
    entry: "./src/index.js",
    output: {
      filename: "cardGameUNO.js",
      path: path.resolve(__dirname, "public"),
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },
  };