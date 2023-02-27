import {useRouter} from 'next/router'

export default function ClientsProjectsPage(){
    const route = useRouter();

    console.log(route.query);
    
    return (
        <div>
            <h1>The Projects of a Given Client</h1>
        </div>
    );
};