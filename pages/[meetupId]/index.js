import { MongoClient, ObjectId } from "mongodb";
const showMeetup = (props) => {

    return <>
        <img src={props.data.image} alt={props.data.title} />
        <h3>{props.data.title}</h3>
        <h4>{props.data.address}</h4>
    </>
}
export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb://rishuishind:saras123@ac-bqc4kzx-shard-00-00.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-01.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-02.mapsrxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1i7v8o-shard-0&authSource=admin&retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
    return {
        fallback: false,
        paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } }))
    }
}
export async function getStaticProps(context) {
    const id = context.params.meetupId;
    const client = await MongoClient.connect('mongodb://rishuishind:saras123@ac-bqc4kzx-shard-00-00.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-01.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-02.mapsrxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1i7v8o-shard-0&authSource=admin&retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const data = await meetupCollection.findOne({ _id: ObjectId(id) });
    client.close();
    return {
        props: {
            data: {
                id: data._id.toString(),
                title: data.title,
                address: data.address,
                image: data.image
            }
        }
    }
}
export default showMeetup