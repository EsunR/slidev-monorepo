#!/usr/bin/env zx
import "zx/globals";
import fg from "fast-glob";

const rootDir = path.resolve(__dirname, "../");
const slidesDir = path.resolve(__dirname, "../slides");
const slideProjectDirs = await fg("./*", {
  cwd: slidesDir,
  onlyFiles: false,
  deep: 1,
  absolute: true,
});

// 检查当前是否有 dist 目录，如果没有则创建
if (fs.existsSync(path.resolve(rootDir, "dist"))) {
  cd(rootDir);
  await $`rm -rf dist`;
}

for (let dir of slideProjectDirs) {
  cd(dir);
  await $`rm -rf dist`;
}
