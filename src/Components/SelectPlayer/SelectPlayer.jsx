import { PropTypes } from "prop-types";
import { IoMdCheckmarkCircle } from 'react-icons/io';


const SelectPlayer = ({ selectPlayer }) => {
    return (
        <div>
            <div className="glass rounded-lg bg-green-800 my-3 mx-2 py-3">
                <h1 className="text-white text-xl font-bold text-center">Selected Player</h1>
            </div>

            {
                selectPlayer.map((player, idx) => <div key={idx} className="glass rounded-lg bg-green-800  my-3 mx-2 py-3">

                    <div className="flex justify-between items-center px-2 gap-1">
                        <div className="avatar flex justify-center items-center ">
                            <div className="w-10 rounded-full bg-stone-300 ring ring-green-800 ring-offset-green-800 ring-offset-1">
                                <img src={player.img} />
                            </div>
                        </div>
                        <h1 className="text-white text-lg font-bold text-center">{player.name}</h1>
                        <IoMdCheckmarkCircle className="text-white text-2xl" />
                    </div>

                </div>)
            }

        </div>
    );
};

SelectPlayer.propTypes = {
    selectPlayer: PropTypes.object
}
export default SelectPlayer;