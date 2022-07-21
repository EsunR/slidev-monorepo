import type { VercelRequest, VercelResponse } from "@vercel/node";
import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";
import os from "os";
import path from "path";
import fs from "fs";

async function getScreenShotFilePath(slideName: string, baseUrl: string) {
  const screenShotFileDir = path.resolve(os.tmpdir(), `${slideName}.png`);
  if (!fs.existsSync(screenShotFileDir)) {
    const browser = await puppeteer.launch(
      process.env.AWS_EXECUTION_ENV
        ? {
            args: chrome.args,
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
            defaultViewport: {
              width: 1920/4,
              height: 1080/4,
              deviceScaleFactor: 1,
            },
          }
        : {
            args: [],
            executablePath:
              "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          }
    );
    const page = await browser.newPage();
    await page.goto(`${baseUrl}/${slideName}`);
    await page.screenshot({ path: screenShotFileDir });
    await browser.close();
  }
  return screenShotFileDir;
}

export default async (request: VercelRequest, response: VercelResponse) => {
  const reqSlide = request.query.slide;
  if (!reqSlide) {
    response.status(404);
    return;
  }
  const screenShotFileDir = await getScreenShotFilePath(
    reqSlide as string,
    `https://${request.headers.host}`
  );
  response.setHeader("Content-Type", "image/png");
  response.status(200).send(fs.readFileSync(screenShotFileDir));
};

async function main() {
  const screenShotFileDir = await getScreenShotFilePath(
    "fe-future",
    "https://slidev-monorepo.vercel.app"
  );
  console.log(screenShotFileDir);
}

if (!process.env.AWS_EXECUTION_ENV) {
  main();
}
