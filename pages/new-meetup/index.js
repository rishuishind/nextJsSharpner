import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const newMeetup = () => {
    const handleAddMeetup = (meetupData) => {
        console.log(meetupData);
    }
    return <>
        <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
}
export default newMeetup