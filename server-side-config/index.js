require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jtbwf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
async function run() {
    try {
        const database = client.db("crowdFundingDB");
        const campaignCollection = database.collection("campaigns");
        const runningCampaignCollection = database.collection("RunningCampaigns");
        const donatedCollection = database.collection("donatedUsers");

        app.get('/', async (req, res) => {
            const runningCampaign = runningCampaignCollection.find();
            const result = await runningCampaign.toArray()
            res.send(result)
        })
        app.get('/all-campaign', async (req, res) => {
            const campaign = campaignCollection.find();
            const result = await campaign.toArray()
            res.send(result)
        })
        app.get('/all-campaign/sortedData', async (req, res) => {
            const campaign = campaignCollection.find().sort({ number: -1 });
            const result = await campaign.toArray()
            res.send(result)
        })
        app.get('/my-campaign/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email }
            const campaign = campaignCollection.find(query)
            const result = await campaign.toArray()
            res.send(result)
        })
        app.get('/all-campaign/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await campaignCollection.findOne(filter)
            res.send(result)
        })
        app.get('/campaign/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await runningCampaignCollection.findOne(filter)
            res.send(result)
        })
        app.get('/update-campaign/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await campaignCollection.findOne(filter)
            res.send(result)
        })
        app.get('/donated-campaign', async (req, res) => {
            const donatedUsers = donatedCollection.find()
            const result = await donatedUsers.toArray()
            res.send(result)
        })
        app.get('/donated-campaign/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email }
            const donatedUsers = donatedCollection.find(query)
            const result = await donatedUsers.toArray()
            res.send(result)
        })
        app.post('/all-campaign', async (req, res) => {
            const campaign = req.body;
            const result = await campaignCollection.insertOne(campaign)
            res.send(result)
        })
        app.post('/donated-campaign', async (req, res) => {
            const donatedUser = req.body;
            const result = await donatedCollection.insertOne(donatedUser)
            res.send(result)
        })
        app.delete('/all-campaign/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await campaignCollection.deleteOne(filter)
            res.send(result)
        })
        app.patch('/update-campaign/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const campaign = req.body;
            const updatedDoc = {
                $set: {
                    image: campaign.image,
                    title: campaign.title,
                    campaign_type: campaign.campaign_type,
                    date: campaign.date,
                    number: campaign.number,
                    desc: campaign.desc
                }
            }
            const result = await campaignCollection.updateOne(filter, updatedDoc, options)
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally { }
}
run().catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Running port is ${port}`)
})