const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middle ware
app.use(cors());
app.use(express.json()); 

// user: dbUser2
// pass: wU6SuMLpwghJt6ja



const uri = "mongodb+srv://dbUser2:wU6SuMLpwghJt6ja@cluster0.47nvmfs.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    
    try{
        const userCollection = client.db('nodeMongoCrud').collection('users');
        // create a document to insert
        app.post('/users', async(req, res) => {
            const user = req.body;
            console.log(user);
            const result = await userCollection.insertOne(user);
            res.send(result);
        })
    }
    finally{

    }
}

run().catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send('Hello from node mongodb crud server...');
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})