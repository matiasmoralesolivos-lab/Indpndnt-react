function MetronomeTrack() {
  return (
    <div className="track track-metro">
      <h3>Metrónomo</h3>

      <div className="controls-top">
        <button className="btn">📁</button>
        <button className="btn play">▶</button>
        <button className="btn stop">⏹</button>
        <button className="btn mute">🔇</button>
      </div>

      <div className="timeline">
        <canvas className="visualizer"></canvas>
        <div className="playhead"></div>
      </div>
    </div>
  );
}

export default MetronomeTrack;