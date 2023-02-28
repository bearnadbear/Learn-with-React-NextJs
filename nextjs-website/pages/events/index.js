import {getAllEvents} from '../../dummy-data';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';

export default function AllEventsPage() {
    const router = useRouter();
    const events = getAllEvents();

    function findEventsHandler(year, month){
        const fullpath = `/events/${year}/${month}`;

        router.push(fullpath);
    }

    return (
        <div>
            <EventSearch onSeach={findEventsHandler}/>
            <EventList items={events}/>
        </div>
    );
};