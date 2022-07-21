import type { VercelRequest, VercelResponse } from "@vercel/node";
import fg from "fast-glob";
import fs from "fs";
import path from "path";

const slidesDir = path.resolve(__dirname, "../slides");
const slidePkgFileDirs = fg.sync("./*/package.json", {
  cwd: slidesDir,
  absolute: true,
});
const results: {
  name: string;
  desc: string;
  path: string;
}[] = [];

for (const dir of slidePkgFileDirs) {
  const pkg = JSON.parse(fs.readFileSync(dir, "utf8"));
  results.push({
    desc: pkg.description,
    name: pkg.name,
    path: `/${pkg.name}`,
  });
}

export default async (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send(results);
};
