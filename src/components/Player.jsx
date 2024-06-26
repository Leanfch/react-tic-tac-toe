import { useState } from 'react';

export default function Player({initialName, symbol, isActive, onChangeName}) {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const handleIsEditing = () => {
        setIsEditing(editing => !editing);

        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                { isEditing ? <input type="text" value={playerName} required onChange={handleChange}/> : <span className="player-name">{playerName}</span> }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleIsEditing}>{isEditing ? 'SAVE' : 'Edit'}</button>
        </li>
    )
}
