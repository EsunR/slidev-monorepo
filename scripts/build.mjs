#!/usr/bin/env zx
import "zx/globals";
import fg from "fast-glob";
import fs from "fs";
import path from "path";

const rootDir = path.resolve(__dirname, "../");
const slidesDir = path.resolve(__dirname, "../slides");
const slideProjectDirs = await fg("./*", {
  cwd: slidesDir,
  onlyFiles: false,
  deep: 1,
  absolute: true,
});

cd(rootDir);

// 检查当前是否有 dist 目录，如果没有则创建
if (!fs.existsSync(path.resolve(rootDir, "dist"))) {
  fs.mkdirSync(path.resolve(rootDir, "dist"));
}

for (let dir of slideProjectDirs) {
  const pkgJsonFile = path.resolve(dir, "package.json");
  const pkgName = require(pkgJsonFile).name;

  cd(dir);
  await $`pnpm build`;
  await $`mv dist ../../dist/${pkgName}`;
}
