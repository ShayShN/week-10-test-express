import { readFileFS, writeFileFS } from "../handel-file.js";

const pathEvents = "data/events.json"
const pathRecipts = "data/receipts.json"


export const  buyTickets = async (req, res) => {
  try {
      const dataEvents = await readFileFS(pathEvents)
      const dataRecipts = await readFileFS(pathRecipts)
      
      const foundEvent = dataEvents.findIndex(event => event.eventName.toLowerCase() === req.body.eventName.toLowerCase())
      if (foundEvent === -1) {
          return res.status(400).json("not Exists!")
      } else {
          if ((dataEvents[foundEvent].ticketsAvailable - req.body.quantity) > 0) {
              dataEvents[foundEvent].ticketsAvailable -= req.body.quantity
              await writeFileFS(pathEvents, dataEvents)
              const newRecipt = {
                  username: req.body.username,
                  eventName: req.body.eventName,
                  ticketsBought: req.body.quantity
              }
              dataRecipts.push(newRecipt)
              await writeFileFS(pathRecipts, dataRecipts)
              return res.json({ "message": "Tickets purchased successfully"})
          } else {
              return res.status(400).json("There is not enough Tickets!")
          }
          
      }
  } catch (err) {
    console.error(err);
    
  }
}

export const userPurchaseSummary = async (req, res) => {
    try {
        const dataRecipts = await readFileFS(pathRecipts)
        const foundRecipts = dataRecipts.filter(recipt => recipt.username === req.params.username )
        if (foundRecipts.length === 0) {
            return res.json(0)
        } else {
            let lengthArrayRecipts = foundRecipts.length
            let totalTicketsBought = 0
            let uniqEventName = []
            foundRecipts.forEach((recipt) => {
                totalTicketsBought += recipt.ticketsBought
                uniqEventName.push(recipt.eventName)
            });
            const uniqEventSet = [...new Set(uniqEventName)]
            console.log(uniqEventSet);
          
            
            return res.json({
                                totalTicketsBought: totalTicketsBought,
                                events: uniqEventSet,
                                averageTicketsPerEvent: totalTicketsBought / lengthArrayRecipts
            })
    
        }
    } catch (err) {
        console.error(err);
        
    }
}