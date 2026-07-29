const fs = require("fs");
const path = require("path");

const routesDir = path.join(__dirname, "src", "routes");
const files = fs.readdirSync(routesDir).filter((f) => f.endsWith(".tsx"));

files.forEach((file) => {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Replace input email classname missing bg-white
  const target1 = `className="flex-1 px-4 py-3 rounded-full text-slate-800"`;
  const replacement1 = `className="flex-1 px-4 py-3 rounded-full bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"`;

  const target2 = `className="flex-1 px-4 py-3 md:py-4 rounded-full text-slate-800"`;
  const replacement2 = `className="flex-1 px-4 py-3 md:py-4 rounded-full bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500"`;

  // General regex replace for email inputs missing bg-white
  content = content.replace(
    /className="([^"]*rounded-full[^"]*text-slate-800[^"]*)"/g,
    (match, p1) => {
      if (!p1.includes("bg-white") && match.includes("flex-1") && match.includes("px-4")) {
        return `className="${p1} bg-white focus:outline-none focus:ring-2 focus:ring-red-500"`;
      }
      return match;
    },
  );

  fs.writeFileSync(filePath, content);
});

console.log("Fixed email inputs");
