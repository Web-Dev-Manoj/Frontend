import React from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function Gameboard() {
    return (
        <ol id="game-board">
            {initialBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, playerSymbolIndex) => <li key={playerSymbolIndex}>
                        <button></button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}

export default Gameboard;