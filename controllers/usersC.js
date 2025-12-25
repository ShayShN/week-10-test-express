import { readFileFS, writeFileFS } from "../handel-file.js";

const pathUsers = "data/users.json"

export const RegisterUser = async (req, res) => {
    const {username,password} = req.body
  try {
      const dataUsers = await readFileFS(pathUsers)
      const newUser = {username, password}
      const foundUser = dataUsers.find(user => user.username === newUser.username)
      if (!foundUser) {
        dataUsers.push(newUser)
        await writeFileFS(pathUsers, dataUsers)
        return res.json({"message": "User registered successfully"})
      } else {
        return res.status(400).json("already Exists!")
      }
  } catch (err) {
        console.error(err);    
  }
  
}