import express from "express"
import { validateUser } from "../middllware/validateUser.js"
import { buyTickets, userPurchaseSummary } from "../controllers/reciptsC.js"

const router = express.Router()

router.post("/tickets/buy", validateUser, buyTickets)
router.get("/:username/summary", userPurchaseSummary)

export default router