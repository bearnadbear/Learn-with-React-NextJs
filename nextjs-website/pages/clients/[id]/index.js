import {useRouter} from 'next/router'

export default function ClientsProjectsPage(){
    const route = useRouter();

    console.log(route.query);

    function loadProjectHandler(){
        route.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid: 'projecta'}
        });
    };
    
    return (
        <div>
            <h1>The Projects of a Given Client</h1>

            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
};