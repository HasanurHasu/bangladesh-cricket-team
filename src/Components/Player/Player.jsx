import PropTypes from 'prop-types';
const Player = ({ player, handleSelectPlayer }) => {
    const { name, img, salary, age, address } = player;
    return (
        <div>
            <div className="card glass bg-green-950 rounded-lg">
                <div className="avatar flex justify-center items-center pt-5">
                    <div className="w-36 rounded-full bg-stone-300">
                        <img src={img} />
                    </div>
                </div>
                <div className="card-body p-4">
                    <h2 className="glass text-xl font-bold text-center bg-green-800 p-1 rounded-md text-white">{name}</h2>
                    <p className="text-white">Salary: {salary} Taka</p>
                    <p className="text-white">Age: {age} Years</p>
                    <p className="text-white">Address: {address}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleSelectPlayer(player)} className="px-4 py-2 bg-green-800 rounded-md text-white font-bold">Add This Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectPlayer: PropTypes.func
}

export default Player;