// TODO: Save as Snippets in website
const fs = require("fs");
const path = require("path");

function findFiles(dir) {
  const files = fs.readdirSync(path.join(process.cwd(), dir), {
    encoding: "utf-8",
    withFileTypes: true,
  });
  return files.reduce((acc, file) => {
    if (file.isDirectory()) return [...acc, ...findFiles(`${dir}/${file.name}`)];
    if (dir === "components" && file.name === "index.ts") return acc;

    const fileContents = fs.readFileSync(`${dir}/${file.name}`, { encoding: "utf-8" });

    if (file.name.match(/\.(ts|tsx|js|jsx)$/) && fileContents.includes("export")) {
      acc.push(`export * from "${dir}/${file.name.replace(/\.(ts|tsx|js|jsx)$/, "")}";`);
    }
    return acc;
  }, []);
}

module.exports = () => {
  const fileContent = findFiles("components").join("\n") + "\n";
  const currentIndex = fs.readFileSync(path.join(process.cwd(), "components/index.ts"), {
    encoding: "utf-8",
  });
  if (currentIndex !== fileContent) {
    console.log("yay!");
    fs.writeFileSync(path.join(process.cwd(), "components/index.ts"), fileContent);
  }
};
