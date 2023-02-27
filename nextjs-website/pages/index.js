import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function HomePage(){
    const fearuredEvents = getFeaturedEvents();
    
    return (
        <div>
            <EventList items={fearuredEvents} />
        </div>
    );
};