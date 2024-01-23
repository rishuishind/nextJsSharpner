import MeetupList from "../components/meetups/MeetupList";
import Dummy_Meetups from '../components/data/Dummy_Meetups';

const homePage = (props) => {
    return <>
        <MeetupList meetups={props.meetup} />
    </>
}

export async function getStaticProps() {
    return {
        props: {
            meetup: Dummy_Meetups,
        },
        revalidate: 1
    }
}

export default homePage;