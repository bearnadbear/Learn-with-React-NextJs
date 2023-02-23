import {Route, Switch} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
    return (
        <div>
            <h1>Routing Course</h1>

            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPage/>
                </Route>

                <Route path='/new-meetups'>
                    <NewMeetupsPage/>
                </Route>

                <Route path='/favorites'>
                    <FavoritesPage/>
                </Route>
            </Switch>
        </div>
    );
};

export default App;
