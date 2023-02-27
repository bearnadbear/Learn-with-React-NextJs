import Link from 'next/Link';

import classes from './button.module.css'

export default function Button(props) {
    return (
        <Link href={props.link}>
            <span className={classes.btn}>{props.children}</span>
        </Link>
    );
}; 