import { verifySignature } from "@upstash/qstash/dist/nextjs";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.headers);

    await new Promise((r) => setTimeout(r, 1000));

    console.log("Success");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log(typeof req.body, { body: req.body });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    res.status(200).json({ name: "John Doe", body: req.body });
}

export default verifySignature(handler);

export const config = {
    api: {
    bodyParser: false,
    },
};