const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = 3000;

const uri = "mongodb+srv://";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

async function run() {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");

            // Set the db variable to our test database
            db = client.db('test');
        } finally {
            // Do not close the client here
        }
}
run().catch(console.dir);

app.use(express.json());

app.post('/items', async (req, res) => {
    const item = req.body;
    const result = await db.collection('items').insertOne(item);
    res.json(result);
});

app.get('/items', async (req, res) => {
    const items = await db.collection('items').find().toArray();
    res.json(items);
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});