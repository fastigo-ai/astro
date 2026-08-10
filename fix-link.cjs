const fs = require("fs");
const path = require("path");

const routesDir = path.join(__dirname, "src", "routes");
const files = fs.readdirSync(routesDir).filter((f) => f.endsWith(".tsx"));

files.forEach((file) => {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  // Ensure Link is imported
  if (!content.includes("import { Link }") && !content.includes("import { Link, ")) {
    // Add import after the first import or at the top
    if (content.includes("import ")) {
      content = content.replace(
        /import (.*?)\n/,
        'import { Link } from "react-router-dom";\nimport $1\n',
      );
    } else {
      content = 'import { Link } from "react-router-dom";\n' + content;
    }
  }

  // Replace <a href="/something" to <Link to="/something"
  // specifically for internal links. Let's do it carefully for the navbar loop:
  // In the navbar, the code is:
  // <a
  //   href={
  //     item === "About Us"
  // ...
  // </a>

  content = content.replace(
    /<a\n\s*href=\{([\s\S]*?)\}\n\s*className=\{`block px-4 py-3/g,
    "<Link\n                    to={$1}\n                    className={`block px-4 py-3",
  );

  // Replace the closing </a> for that specific block
  // This is a bit tricky, but since we know it's {item} \n </a>
  content = content.replace(/\{item\}\n\s*<\/a>/g, "{item}\n                  </Link>");

  // Also replace the logo links
  content = content.replace(/<a href="\/">([\s\S]*?)<\/a>/g, '<Link to="/">$1</Link>');

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
