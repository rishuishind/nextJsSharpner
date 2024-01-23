import Dummy_Meetups from '../../components/data/Dummy_Meetups';

const showMeetup = (props) => {

    return <>
        <img src={props.data.image} alt={props.data.title} />
        <h3>{props.data.title}</h3>
        <h4>{props.data.address}</h4>
    </>
}
export function getStaticPaths() {
    return {
        fallback: false,
        paths: [{ params: { meetupId: 'm1', } }, { params: { meetupId: 'm2' } }, { params: { meetupId: 'm3' } }]
    }
}
export function getStaticProps(context) {
    const id = context.params.meetupId;
    let data = Dummy_Meetups.find((list) => list.id === id)
    if (!data) {
        data = Dummy_Meetups[1];
    }
    return {
        props: {
            data: data,
        }
    }
}
export default showMeetup