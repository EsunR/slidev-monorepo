import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send({
    headers: request.headers.host,
    url: request.url,
    env: process.env.AWS_EXECUTION_ENV,
  });
};
