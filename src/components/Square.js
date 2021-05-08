import React from 'react';

import classes from './Square.module.css';

const Square = (props) => {

    return (
        <button className={classes.btn} onClick={props.onClick}>{props.value}</button>
    );
} ;

export default Square;