import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    function addMeetupData(meetupData){

    };

    return (
        <section>
            <NewMeetupForm onAddMeetup={addMeetupData}/>
        </section>
    );
};

export default NewMeetupsPage;