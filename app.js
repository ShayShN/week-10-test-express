import express from "express"
import routerUsers from "./routes/usersR.js"
import routerEvents from "./routes/eventsR.js"

const app = express()
const port = 3001

app.use(express.json())

app.use("/user", routerUsers)
app.use("/creator", routerEvents)











app.listen(port, ()=>{
    console.log(`server running on  http://localhost:${port}`);
})