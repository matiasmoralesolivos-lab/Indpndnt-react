import Header from "./components/Header";
import Track from "./components/Track";
import MasterPanel from "./components/MasterPanel";
import MetronomeTrack from "./components/MetronomeTrack";

import { useContext } from "react";
import { StudioContext } from "./context/StudioContext";

function App() {
  const { tracks, addTrack } = useContext(StudioContext);

  return (
    <>
      <Header />

      <div className="studio-layout-vertical">
        <MetronomeTrack />

        <div className="add-track-section">
          <button
            className="btn btn-add-track"
            onClick={addTrack}
          >
            ➕ Agregar músico
          </button>

          <span className="track-counter">
            Pistas: {tracks.length}/6
          </span>
        </div>

        <div className="studio-content">
          <div className="tracks-container">
            {tracks.map((track) => (
              <Track
                key={track.id}
                id={track.id}
                title={track.name}
              />
            ))}
          </div>

          <MasterPanel />
        </div>
      </div>
    </>
  );
}

export default App;