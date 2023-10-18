import { MongoClient } from 'mongodb'
import { connectionString } from './secrets.js'

const client = new MongoClient(connectionString) //creates a new instance of the MongoClient class that uses the connection string and names it client

await client.connect()
    .catch(console.error) //parameters cancel out and theres only one line on the function, console.error is all we need. 
    
export const db = client.db('MyPlants')