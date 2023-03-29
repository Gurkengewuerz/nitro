import { useState } from "react";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { GetConfiguration } from "../../api";

  export const RadioView = () => {
  const [audio, setAudio] = useState(new Audio( GetConfiguration<string>("radio.stream.url") ));
  const [isPlaying] = useState(false);
  
    const startRadio = () => {
      var resp = audio.play();

      if (resp !== undefined) {
        resp
            .then((_) => {
              document.getElementById("startRadio").style.color = "blue";
              document.getElementById("pauseRadio").style.color = "black";
            })
		}
	};
	
	if (!GetConfiguration<boolean>("enable.radioplayer")) return console.log("Internal Nitro player is disabled in the ui-config");
	
	const pauseRadio = () => {
    document.getElementById("startRadio").style.color = "black";
    document.getElementById("pauseRadio").style.color = "red";
    audio.pause();
  };

  const updateVolume = (volume) => {
    let radioVolume = Math.round(volume);

    radioVolume = Math.max(0, radioVolume);
    radioVolume = Math.min(100, radioVolume);

    audio.volume = radioVolume / 100;
  }

  audio.autoplay = true;
  audio.volume = 0.3;

  return (
    <div
      className="nitro-notification-bubble rounded"
      style={{ marginTop: "5px" }}
    >
      <div style={{ float: "right" }}>
        <div
          className="nitro-purse-element"
          style={{ width: "180px", height: "45px" }}
        >
          <div className="row" style={{ marginTop: "1px" }}>
            <div className="col-md-2">
              <button
                id="startRadio"
                type="button"
                style={{
                  backgroundColor: "#F1B941",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={(e) => startRadio()}
              >
                {" "}
                <FaPlayCircle className="fa-icon" />{" "}
              </button>
              <button
                id="pauseRadio"
                type="button"
                style={{
                  backgroundColor: "#F1B941",
                  color: "black",
                  cursor: "pointer",
                }}
                onClick={(e) => pauseRadio()}
              >
                {" "}
                <FaPauseCircle className="fa-icon" />{" "}
              </button>
            </div>
            <div className="col-md-9">
              <input
                onChange={(e) => updateVolume(e.target.value)}
                style={{ marginTop: "7px", display: "inline-block" }}
                type="range"
                className="form-range"
                id="customRange1"
                min="0"
                max="100"
                step="1"
              ></input>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
    </div>
  );
};