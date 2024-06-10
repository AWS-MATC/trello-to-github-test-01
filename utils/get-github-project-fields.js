"use strict";

let gh = require("../lib/gh.js");

async function main() {
  let fields = await gh.projects.getCustomFields({
    name: process.env.GITHUB_PROJECT_NAME // Ensure this is set in your environment variables
  });
  fields.forEach(function (field) {
    console.info(`"${field.id}": "${field.name}"`);
  });
}

main();
