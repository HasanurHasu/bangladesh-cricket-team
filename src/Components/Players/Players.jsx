import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import SelectPlayer from "../SelectPlayer/SelectPlayer";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [selectPlayer, setSelectPlayer] = useState([]);

    useEffect(() => {
        fetch('./bangladesh-team.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const handleSelectPlayer = player =>{
        const newSelectPlayer = [...selectPlayer, player];
        setSelectPlayer(newSelectPlayer);
    }

    return (
        <div className="grid grid-cols-4 max-w-6xl m-auto gap-8">
            <div className="col-span-3 grid grid-cols-3 gap-8">
                {
                    players.map(player => <Player
                         key={player.id}
                         player={player}
                         handleSelectPlayer={handleSelectPlayer}
                         ></Player>)
                }
            </div>
            <div className="glass bg-green-800 rounded-lg col-span-1">
                <SelectPlayer selectPlayer={selectPlayer}></SelectPlayer>
            </div>

        </div>

    );
};

export default Players;