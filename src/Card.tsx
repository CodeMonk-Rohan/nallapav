import TBSM from "./assets/TBSM.webp"
import prev from "./assets//prev.png"
import pause from "./assets//pause.png"

function Card() {
    return(
        <div className="card">
            <img className="album_art" src={TBSM} alt="profile-picture"></img>
          <div className="scrollable-comp">
                <p className="track_name">
                    Seedhe Maut
                </p>
          </div>
          <div>
            <input type="range" step={0.01} className="range"></input> 
          </div>
          <div className="track_buttons">
                <div className="previous">
                    <button>
                    <img className="prev_butt" src={prev}></img>
                    </button>
                </div>
                <div className="play">
                    <button>
                <img className="play_butt" src={pause}></img>
                    </button>
                </div>
                <div className="next">
                    <button>
                <img className="next_butt" src={prev}></img>
                    </button>
                </div>
          </div>

        </div>
    );
}



export default Card