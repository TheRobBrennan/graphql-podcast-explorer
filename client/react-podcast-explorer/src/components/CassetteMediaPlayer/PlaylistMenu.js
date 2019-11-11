import React from 'react';
import { playerContextFilter } from '@cassette/core';

const PlaylistMenu = ({ playlist, activeTrackIndex, onSelectTrackIndex }) => {
  return (
    <div>
      {playlist.map((track, i) => {
        const playing = activeTrackIndex === i;
        return (
          <div key={track.title}>
            {playing && <strong>{track.title}</strong>}
            {!playing && (
              <button onClick={() => onSelectTrackIndex(i)}>
                {track.title}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default playerContextFilter(PlaylistMenu, [
  'playlist',
  'activeTrackIndex',
  'onSelectTrackIndex',
]);
