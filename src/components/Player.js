import React from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import LinearBuffer from "./Progressbar";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ".././styles/Player.css";
function Player() {
  return (
    <div>
      <div>
        <LinearBuffer />
      </div>

      <div className="icon">
        <SkipPreviousIcon />
        <PlayCircleFilledIcon />
        <SkipNextIcon />
      </div>
    </div>
  );
}

export default Player;
