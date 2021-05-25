const watch = require("node-watch");
const path = require("path");
const createIndex = require("./create-components-export-index");

watch(path.join(process.cwd(), "components"), { recursive: true }, (evt, name) => {
  if (name.includes("components\\index.ts")) return;
  if (!name.match(/\.(js|jsx|ts|tsx)$/)) return;
  createIndex();
});
