import express from "express"
import { validateUser } from "../middllware/validateUser.js"
import { createEvent } from "../controllers/eventsC.js"

const router = express.Router()

router.post("/events", validateUser, createEvent)

export default router