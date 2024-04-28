import { defineConfig } from "tsup";
import * as fs from "fs";

export default defineConfig({
  entry: ["src/index.mts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ["cjs"],
  outDir: "dist",
  onSuccess: async () => {
    fs.copyFile(
      "./config/appsscript.base.json",
      "./dist/appsscript.json",
      (err) => {
        if (err) {
          console.error(
            "Failed to copy appsscript.base.json to dist/appsscript.json"
          );
        }
      }
    );
  },
});
