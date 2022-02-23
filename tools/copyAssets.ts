import * as shell from "shelljs";
// Copy all the view templates and assets in the public folder
shell.cp("-R", ["src/views", "src/public"], "app/");

// Remove unnecessary files
shell.rm(["app/public/js/*.ts", "app/public/js/*.json"]);