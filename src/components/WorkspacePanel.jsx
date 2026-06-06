import { useContext } from "react";
import { StudioContext } from "../context/StudioContext";

function WorkspacePanel() {
  const {
    tracks,
    toggleTrackVisibility,
    layout,
    setLayout,
  } = useContext(StudioContext);

  return (
    <div className="workspace-panel">

      <h3>☰ Workspace</h3>

      <h4>Vista</h4>

      <label className="workspace-item">
        <input
          type="radio"
          checked={layout === 1}
          onChange={() => setLayout(1)}
        />
        1 columna
      </label>

      <label className="workspace-item">
        <input
          type="radio"
          checked={layout === 2}
          onChange={() => setLayout(2)}
        />
        2 columnas
      </label>

      <hr />

      <h4>Pistas visibles</h4>

      {tracks.map((track) => (
        <label
          key={track.id}
          className="workspace-item"
        >
          <input
            type="checkbox"
            checked={track.visible}
            onChange={() => toggleTrackVisibility(track.id)}
          />

          {track.name}

        </label>
      ))}

    </div>
  );
}

export default WorkspacePanel;