import { readFileFS, writeFileFS } from "../handel-file.js";


const pathRecipts = "data/receipts.json"


export const  buyTickets = async (req, res) => {
    const dataRecipts = await readFileFS(pathRecipts)

}