import MeetupList from "../components/meetups/MeetupList";
import Dummy_Meetups from '../components/data/Dummy_Meetups';

const homePage = () => {
    return <>
        <MeetupList meetups={Dummy_Meetups} />
    </>
}

export default homePage;