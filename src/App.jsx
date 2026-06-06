import WorkspacePanel from "./components/WorkspacePanel";
import Header from "./components/Header";
import Track from "./components/Track";
import MasterPanel from "./components/MasterPanel";
import MetronomeTrack from "./components/MetronomeTrack";

import { useContext } from "react";
import { StudioContext } from "./context/StudioContext";

function App() {
  const {
  tracks,
  addTrack,
  layout,
} = useContext(StudioContext);

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

  <WorkspacePanel />
<div className={`tracks-container layout-${layout}`}>
  {tracks
    .filter((track) => track.visible)
    .map((track) => (
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