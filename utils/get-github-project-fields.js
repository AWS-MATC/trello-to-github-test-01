"use strict";

let gh = require("../lib/gh.js");

async function main() {
  let fields = await gh.projects.getCustomFields({ name: process.env.GITHUB_PROJECT_NAME });
  fields.forEach(function (field) {
    console.info(`"${field.id}": "${field.name}"`);
  });
}

main();
