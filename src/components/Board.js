import React from 'react';
import Square from './Square';

import classes from './Board.module.css'

const Board = (props) => {
    return (
        <div className={classes.board}>
            {props.squares.map((square, i) => {
                return <Square key={i} value={square} onClick={() => props.onClick(i)} />
            })}
        </div>
    );
} ;

export default Board;