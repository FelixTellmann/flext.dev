// TODO: Save as Snippets in website
const fs = require("fs");
const path = require("path");

function findFiles(dir) {
  const files = fs.readdirSync(path.join(process.cwd(), dir), {
    encoding: "utf-8",
    withFileTypes: true,
  });
  return files.reduce((acc, file) => {
    if (file.isDirectory()) return { ...acc, ...findFiles(`${dir}/${file.name}`) };
    if (file.name === "index.ts") return acc;

    const fileContents = fs.readFileSync(`${dir}/${file.name}`, { encoding: "utf-8" });

    if (file.name.match(/\.(ts|tsx|js|jsx)$/) && fileContents.includes("export")) {
      if (!acc[dir]) acc[dir] = [];
      acc[dir].push(`export * from "${dir}/${file.name.replace(/\.(ts|tsx|js|jsx)$/, "")}";`);
    }
    return acc;
  }, {});
}

module.exports = () => {
  const fileContent = findFiles("components");

  Object.entries(fileContent).forEach(([key, val]) => {
    const content = val.join("\n") + "\n";
    try {
      const currentIndex = fs.readFileSync(path.join(process.cwd(), `${key}/index.ts`), {
        encoding: "utf-8",
      });
      if (currentIndex !== content) {
        fs.writeFileSync(path.join(process.cwd(), `${key}/index.ts`), content);
      }
    } catch (err) {
      fs.writeFileSync(path.join(process.cwd(), `${key}/index.ts`), content);
    }
  });
};
