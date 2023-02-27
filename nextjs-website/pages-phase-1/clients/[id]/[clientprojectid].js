import {useRouter} from 'next/router'

export default function SelectedClientProjectPage(){
    const route = useRouter();

    console.log(route.query);

    return (
        <div>
            <h1>The Projects Page for a Spesific Project for a Selected Client</h1>
        </div>
    );
};