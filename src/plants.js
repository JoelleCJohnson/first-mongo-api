import { db } from './connectDb.js'

export function getAllPlants(req, res){
    db.collection('plants').find({}).toArray()
    .then(plants => {
        res.send(plants)
    })//if successul this will execute(plants is the result of line 4, we've named it here)
    .catch(err => {
        res.status(500).send({ success: false, message: err }) //standard .catch()
    })//if error, this will execute. It is possible it does both .then() and .catch()
}

export function addPlant(req,res){
    const newPlant = req.body // body tells us the new request.
    db.collection('plants').insertOne(newPlant)
    .then(() => { //we don't need to use a parameter bc if this executes, the add was successful. 
        res.status(201).send({ message: "Plant added", success: true })
    })
    .catch(err => {
        res.status(500).send({ success: false, message: err })
    })
}