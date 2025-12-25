import { readFileFS } from "../handel-file.js";

const pathUsers = "data/users.json"

export const validateUser = async (req, res, next) => {
   try {
     const {username, password} = req.body
     const dataUsers = await readFileFS(pathUsers)
     const foundName = dataUsers.find(user => user.username === username && user.password === password)
     console.log(foundName);
     if (!foundName) {
        return res.status(403).json("user name not found")
     }
     next()
   } catch (err) {
        console.error(err)
        
   }
}