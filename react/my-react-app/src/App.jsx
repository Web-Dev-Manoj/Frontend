import React, { Fragment } from 'react';
import header from './Tic-Tac-Toe/assets/game-logo.png';
import Player from './Tic-Tac-Toe/Components/Player';

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
                        <Player number='Player1' symbol='X' />
                        <Player number='Player2' symbol='0' />
                    </ol>
                </div>
                {/* Logs */}
            </main>
        </Fragment>
    )
};