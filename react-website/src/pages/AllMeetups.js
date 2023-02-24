import {useState} from 'react';

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);


    fetch(
        'https://react-getting-started-new-default-rtdb.firebaseio.com/meetups.json'
    )
        .then(response => {
            return response.json;
        })
        .then(data => {
            setIsLoading(false);
            setLoadedMeetups(data);
        });

    if (isLoading) {
        return (
        alert('Loading ...')
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>

            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
};

export default AllMeetupsPage;