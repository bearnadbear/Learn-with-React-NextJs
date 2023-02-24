import MeetupList from "../components/meetups/MeetupList";

const DummyData = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
        address: 'Meetupsteet 5, 12345 Meetup City',
        description: 'Good job'
    }, {
        id: 'm2',
        title: 'This is a next meetup',
        image: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg',
        address: 'Meetupsteet 5, 12345 Meetup City',
        description: 'Good job ....'
    }
]

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>

            <MeetupList meetups={DummyData}/>
            {/* <ul>
                {
                    DummyData.map((meetup) => {
                        return <li key={meetup.id}>{meetup.title}
                        </li>
                    })
                }
            </ul> */}
        </section>
    );
};

export default AllMeetupsPage;