import React, { useState, Fragment } from 'react';
import Board from './Board';

import { calculateWinner } from '../helpers';

import classes from './Game.module.css'

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const clickHandler = (i) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current]
        //If user click an occupied square or if game is won, return
        if(winner || squares[i]){
            return;
        }
        //Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        //We set the board
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        //We change the value to know newxt player is up
        setXIsNext(!xIsNext);

    };

    const jumpTo = (step) =>{
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        })
    );

    return (
        <Fragment>
            <Board squares={history[stepNumber]} onClick={clickHandler} />
            <div className={classes.scores}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </Fragment>
    )
} ;

export default Game;