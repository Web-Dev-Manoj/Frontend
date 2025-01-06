import React, { Fragment } from 'react';
import header from './Tic-Tac-Toe/assets/game-logo.png';
import Player from './Tic-Tac-Toe/Components/Player';
import Gameboard from './Tic-Tac-Toe/Components/Gameboard';

export default function App() {
    return (
        <Fragment>
            <header>
                <img src={header} alt='Game logo' />
                <h1>Tic-Tac-Toe</h1>
            </header>
            <main>
                <div id='game-container'>
                    <ol id='players'>
                        <Player initialName='Player1' symbol='X' />
                        <Player initialName='Player2' symbol='0' />
                    </ol>
                    <Gameboard />
                </div>
                {/* Logs */}
            </main>
        </Fragment>
    )
};