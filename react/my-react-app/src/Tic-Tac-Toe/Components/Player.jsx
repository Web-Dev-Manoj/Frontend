import React from "react";
import { useState } from "react";

function Player({ initialName, symbol }) {
    const [playerName, setplayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((isEditing) => !isEditing);

        // setIsEditing((isEditing) => !isEditing); 
        // imp: when we are updating state based on previous value, we need to 
        // pass it as function instead of normal value (setIsEditing(!isEditing)
        // so that it(i.e.., react) updates the state immediatley, instead of scheduling.
    }

    function handleChange(event) {
        // console.log(event.target.value);
        setplayerName(event.target.value);
    }

    return (
        <li>
            <span className='player'>
                {
                    isEditing ? (<input type='text' required placeholder="Name" value={playerName} onChange={handleChange} />) :
                        (<span className="player-name">{playerName}</span>)
                }
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {
                    isEditing ? 'Save' : 'Edit'
                }
            </button>
        </li>
    )
}
export default Player;