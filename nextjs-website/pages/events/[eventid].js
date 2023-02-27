import {useRouter} from 'next/router';
import {Fragment} from 'react';

import {getEventById} from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

export default function EventDetailPage() {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (event) {
        return <p>No event Detail</p>
    }

    return (
        <Fragment>
            <EventSummary title={event} />
            <EventLogistics
                date={event}
                address={event}
                image={event}
                imageAlt={event}/>

            <EventContent>
                <p>
                    {event}
                </p>
            </EventContent>
        </Fragment>
    );
};