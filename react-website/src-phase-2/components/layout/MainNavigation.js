import { useContext } from "react";
import {Link} from "react-router-dom";
import FavoritesContext from "../../store/favorite-context";

import classes from './MainNavigation.module.css';

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>

            <nav>
                <ul className={classes
                .ul}>
                    <li className={classes.li}>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>    
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;