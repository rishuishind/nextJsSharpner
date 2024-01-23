import MongoClient from "mongodb/lib/mongo_client";
const showMeetup = (props) => {

    return <>
        <img src={props.data.image} alt={props.data.title} />
        <h3>{props.data.title}</h3>
        <h4>{props.data.address}</h4>
    </>
}
export function getStaticPaths() {
    return {
        fallback: true,
        paths: [{ params: { meetupId: 'm1', } }, { params: { meetupId: 'm2' } }, { params: { meetupId: 'm3' } }]
    }
}
export async function getStaticProps(context) {
    const id = context.params.meetupId;
    const client = await MongoClient.connect('mongodb://rishuishind:saras123@ac-bqc4kzx-shard-00-00.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-01.mapsrxn.mongodb.net:27017,ac-bqc4kzx-shard-00-02.mapsrxn.mongodb.net:27017/?ssl=true&replicaSet=atlas-1i7v8o-shard-0&authSource=admin&retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupCollection.find().toArray();
    let data = meetups.find((list) => list._id.toString() === id)
    console.log('this is data ', data);
    client.close();
    return {
        props: {
            data: {
                title: data.title,
                image: data.image,
                address: data.address,
                id: data._id.toString()
            }
        }
    }
}
export default showMeetup