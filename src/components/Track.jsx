import { useContext } from "react";
import { StudioContext } from "../context/StudioContext";

function Track({ id, title }) {

  const { removeTrack } = useContext(StudioContext);

  return (
    <div className="track">

      {id !== "base" && id !== "user" && (
        <button
          className="btn btn-delete-track"
          onClick={() => removeTrack(id)}
        >
          ✕
        </button>
      )}

      <input
        type="text"
        defaultValue={title}
        className="track-name-input"
      />

      <div className="controls-top">
        <button className="btn">📁</button>
        <button className="btn record">⏺</button>
        <button className="btn play">▶</button>
        <button className="btn pause">⏸</button>
        <button className="btn stop">⏹</button>
        <button className="btn monitor">🎧</button>
        <button className="btn preamp">⚡</button>
      </div>

      <div className="media-row">
        <video></video>

        <div className="fader-wrapper">
          <div className="fader-container">
            <input
              type="range"
              className="fader analog"
              min="0"
              max="1.5"
              step="0.01"
              defaultValue="1"
            />
          </div>
        </div>
      </div>

      <div className="timeline">
        <canvas className="visualizer"></canvas>
        <div className="playhead"></div>
      </div>

    </div>
  );
}

export default Track;