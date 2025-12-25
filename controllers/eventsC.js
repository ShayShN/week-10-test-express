import { readFileFS, writeFileFS } from "../handel-file.js";


const pathEvents = "data/events.json"

export const createEvent = async (req, res) => {
  try {
      const dataEvents = await readFileFS(pathEvents)
      const newEvent = {
                      eventName: req.body.eventName,
                      ticketsAvailable: req.body.ticketsForSale,
                      createdBy: req.body.username
      }
      dataEvents.push(newEvent)
      await writeFileFS(pathEvents, dataEvents)
      return res.json({"message": "Event created successfully"})
  } catch (err) {
    console.error(err);
    
  }
}
