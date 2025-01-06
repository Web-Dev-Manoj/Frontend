import React from "react";
import { useState } from "react";

function Player({ number, symbol }) {
    const [name, setName] = useState('Player1');
    const [isEditing, setIsEditing] = useState(false);
    const [buttonText, setButtonText] = useState(true);

    function handleEditClick() {
        // if (isEditing === false)
        setIsEditing(!isEditing);
        setButtonText(!buttonText);
        changeText();
    }

    function changeText() {

    }

    return (
        <li>
            <span className='player'>
                {
                    isEditing ? (<input type='text' required placeholder="Name" />) :
                        (<span className="player-name">{name}</span>)
                }
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {
                    buttonText ? 'Edit' : 'Done'
                }
            </button>
        </li>
    )
}
export default Player;