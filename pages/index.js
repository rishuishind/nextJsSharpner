import MeetupList from "../components/meetups/MeetupList";
import MongoClient from "mongodb/lib/mongo_client";

const homePage = (props) => {
    return <>
        <MeetupList meetups={props.meetup} />
    </>
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb://rishuishind:saras123@ac-bqc4kzx-shard-00-00.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-01.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-02.mapsrxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1i7v8o-shard-0&authSource=admin&retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupCollection.find().toArray();
    client.close();
    return {
        props: {
            meetup: meetups.map((meetup) => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default homePage;