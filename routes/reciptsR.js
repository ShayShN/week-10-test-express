import express from "express"
import { validateUser } from "../middllware/validateUser.js"

const router = express.Router()

router.post(" /users/tickets/buy", validateUser)


export default router