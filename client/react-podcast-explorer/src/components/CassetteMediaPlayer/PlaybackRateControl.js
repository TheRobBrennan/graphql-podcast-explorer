import React from 'react';

export default ({ playbackRate, onSetPlaybackRate }) => {
  return (
    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
      Speed
      <input
        type="number"
        min={0.5}
        max={3}
        step={0.25}
        value={playbackRate}
        onChange={e => onSetPlaybackRate(Number(e.target.value))}
        style={{ width: 40, marginLeft: 10, paddingLeft: 10 }}
      />
    </div>
  );
}