import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = (() => {

let count  = 100;
return nc<NextApiRequest, NextApiResponse>()
  .get((_, res) => {

    console.log(new Date(), '-- receive request GET /api/count')
    res.status(200).json(count)
  })
  .post((_, res) => {
    console.log(new Date(), '-- receive request POST /api/count')
    res.json(++count)});

})()

export default handler