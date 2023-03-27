import {useState} from "react";
import {FaPlayCircle, FaPauseCircle} from "react-icons/fa";
import {GetConfiguration, LocalizeText} from "../../api";

export const RadioView = () => {
  const radioUrl = GetConfiguration<string>("radio.stream.url");
  const testme = GetConfiguration<boolean>("enable.radioplayer");
  const [audio, setAudio] = useState(new Audio(radioUrl));
  const [volume, setVolume] = useState(null);

  var isPlayed = false;
  var firstCheck = false;

  const startRadio = () => {
    audio.src = radioUrl;
    var resp = audio.play();

    if (resp !== undefined) {
      resp
        .then(_ => {
          document.getElementById("startRadio").style.display = "inline-flex";
          document.getElementById("pauseRadio").style.display = "inline-flex";
          isPlayed = true;
        })
        .catch(error => {});
    }
  };

  if (!testme) return console.log("Internal Nitro player is disabled in the ui-config");

  const pauseRadio = () => {
    document.getElementById("startRadio").style.display = "inline-flex";
    document.getElementById("pauseRadio").style.display = "inline-flex";
    audio.pause();

    audio.src = "";
    isPlayed = false;
  };

  const volumeChange = vol => {
    if (vol !== volume) setVolume(vol);
    if (vol == 100) return;
    else {
      if (vol.toString().length == 1) audio.volume = parseFloat("0.0" + vol);
      else audio.volume = parseFloat("0." + vol);
    }
  };

  if (volume !== null) volumeChange(volume);
  audio.autoplay = true;

  return (
    <div className="nitro-notification-bubble rounded" style={{marginTop: "5px"}}>
      <div style={{float: "right"}}>
        <div className="nitro-purse-element" style={{width: "180px", height: "35px"}}>
          <div className="row" style={{marginTop: "1px"}}>
            <div className="col-md-2">
              <button id="startRadio" type="button" style={{backgroundColor: "#F1B941", color: "black", cursor: "pointer"}} onClick={e => startRadio()}>
                {" "}
                <FaPlayCircle className="fa-icon" />{" "}
              </button>
              <button id="pauseRadio" type="button" style={{backgroundColor: "#F1B941", color: "black", cursor: "pointer"}} onClick={e => pauseRadio()}>
                {" "}
                <FaPauseCircle className="fa-icon" />{" "}
              </button>
            </div>
            <div className="col-md-9">
              <input
                onChange={e => volumeChange(e.target.value)}
                style={{marginTop: "7px", display: "inline-block"}}
                type="range"
                className="form-range"
                id="customRange1"
              ></input>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
