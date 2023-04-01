import {useState} from "react";
import {FaPauseCircle, FaPlayCircle} from "react-icons/fa";

import {GetConfiguration} from "../../../api";
import {Base, Button, Column, Flex, LayoutGridItem, Text} from "../../../common";

export const RadioView = () => {
  const [audio, setAudio] = useState(new Audio(GetConfiguration<string>("radio.stream.url")));

  const [player, setPlayer] = useState({
    playing: true,
    pause: false,
  });

  const PlayClick = () => {
    var resp = audio.play();

    if (resp !== undefined) {
      resp;
      setPlayer({...player, playing: true, pause: false});
    }
  };

  if (!GetConfiguration<boolean>("enable.radioplayer")) return console.log("Internal Nitro player is disabled in the ui-config");

  const PauseClick = () => {
    setPlayer({...player, playing: false, pause: true});
    audio.pause();
  };

  const updateVolume = volume => {
    let radioVolume = Math.round(volume);

    radioVolume = Math.max(0, radioVolume);
    radioVolume = Math.min(100, radioVolume);

    audio.volume = radioVolume / 100;
  };

  audio.autoplay = true;
  audio.volume = 0.3;

  return (
    <Base className="nitro-notification-radio rounded">
      <Column>
        <Flex gap={1}>
          <>
            <Button
              onClick={() => PlayClick()}
              type="button"
              style={{
                backgroundColor: "#F1B941",
                color: player.playing ? "blue" : "black",
                cursor: "pointer",
              }}
            >
              {" "}
              <FaPlayCircle className="radio-font-icons fa-icon" />{" "}
            </Button>
          </>
          <>
            <Button
              onClick={() => PauseClick()}
              type="button"
              style={{
                backgroundColor: "#F1B941",
                color: player.pause ? "red" : "black",
                cursor: "pointer",
              }}
            >
              {" "}
              <FaPauseCircle className="radio-font-icons fa-icon" />{" "}
            </Button>
          </>
        </Flex>
        <input
          onChange={e => updateVolume(e.target.value)}
          style={{marginTop: "7px", display: "inline-block"}}
          type="range"
          className="form-range"
          id="customRange1"
          min="0"
          max="100"
          step="1"
        ></input>
        <div className="col-md-1" />
      </Column>
    </Base>
  );
};
