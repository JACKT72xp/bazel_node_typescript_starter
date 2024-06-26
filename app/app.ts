import {number} from '@org/common'
import * as express from 'express'
import * as dotenv from "dotenv";

dotenv.config();
const app: ReturnType<typeof express> = express()

app.get('/', (_req, res) => {
  res.send({number})
})

export default app
