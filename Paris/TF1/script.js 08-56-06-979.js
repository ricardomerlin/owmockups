const fs = require("fs");

const filePath = "tf1+.html"; // change to your file

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const cleaned = data
    .split("\n")
    .filter(line => !line.toLowerCase().includes("content-security-policy"))
    .join("\n");

  fs.writeFile(filePath, cleaned, "utf8", err => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Content-Security-Policy removed.");
  });
});