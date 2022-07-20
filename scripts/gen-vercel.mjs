#!/usr/bin/env zx
import "zx/globals";
import fg from "fast-glob";
import fs from "fs";

const rootDir = path.resolve(__dirname, "../");
const slidesDir = path.resolve(__dirname, "../slides");
const slideProjectDirs = await fg("./*", {
  cwd: slidesDir,
  onlyFiles: false,
  deep: 1,
  absolute: true,
});

const vercelJson = {
  rewrites: [],
};

for (let dir of slideProjectDirs) {
  const pkgJsonFile = path.resolve(dir, "package.json");
  const pkgName = require(pkgJsonFile).name;
  vercelJson.rewrites.push({
    source: `/${pkgName}/(.*)`,
    destination: `/${pkgName}/index.html`,
  });
}

fs.writeFileSync(
  path.resolve(rootDir, "vercel.json"),
  JSON.stringify(vercelJson, null, 2)
);
