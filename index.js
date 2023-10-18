import express from 'express'
import cors from 'cors'
import { getAllPlants, addPlant } from './src/plants.js'

const PORT = 3005

const app = express()
app.use(express.json()) //allows us to use json from postman req. 
app.use(cors())
/* CORS: cross-origin resource sharing. 
If you place websites in the pink parenthesis,
 those sites will be allowed to use your resources, 
 but no other sites will */

 app.get("/plants", getAllPlants)
 app.post("/plants", addPlant)
//  app.delete("/plants", deletePlant)

 app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
 })