import { useRouter } from 'next/router';
import Dummy_Meetups from '../../components/data/Dummy_Meetups';

const showMeetup = () => {
    const router = useRouter();
    const id = router.query.meetupId;
    const data = Dummy_Meetups.find((list) => list.id === id)
    return <>
        <img src={data.image} alt={data.title} />
        <h3>{data.title}</h3>
        <h4>{data.address}</h4>
    </>
}
export default showMeetup