function MasterPanel() {
  return (
    <div className="master-panel track">
      <h3>MASTER</h3>

      <div className="controls-master">
        <button className="btn play">▶</button>
        <button className="btn stop">⏹</button>
        <button className="btn record">⏺</button>
      </div>

      <div className="master-fader-wrapper">
        <span className="fader-label">+10</span>

        <div className="fader-container master">
          <input
            type="range"
            className="fader analog"
            min="0"
            max="1.5"
            step="0.01"
            defaultValue="1"
          />
        </div>

        <span className="fader-label">-inf</span>
      </div>
    </div>
  );
}

export default MasterPanel;