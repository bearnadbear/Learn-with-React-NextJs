import { getFeaturedEvents } from "../dummy-data";

export default function HomePage(){
    const fearuredEvents = getFeaturedEvents();
    
    return (
        <div>
            <ul>The Home Page</ul>
        </div>
    );
};