import { useState } from 'react';

export default function Player({initialName, symbol}) {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const handleIsEditing = () => {
        setIsEditing(editing => !editing);
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    return (
        <li>
            <span className="player">
                { isEditing ? <input type="text" value={playerName} required onChange={handleChange}/> : <span className="player-name">{playerName}</span> }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleIsEditing}>{isEditing ? 'SAVE' : 'Edit'}</button>
        </li>
    )
}
