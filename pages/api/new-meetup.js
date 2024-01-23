import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(
            'mongodb://rishuishind:saras123@ac-bqc4kzx-shard-00-00.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-01.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-02.mapsrxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1i7v8o-shard-0&authSource=admin&retryWrites=true&w=majority'
        );
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;