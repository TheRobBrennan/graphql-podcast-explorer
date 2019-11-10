import React from 'react';
import { playerContextFilter } from '@cassette/core';

const PlaylistMenu = ({ playlist, activeTrackIndex, onSelectTrackIndex }) => {
  return (
    <div>
      <h3>Select a track</h3>
      <ol>
        {playlist.map((track, i) => {
          const playing = activeTrackIndex === i;
          return (
            <li key={track.title}>
              {playing && <strong>{track.title} (playing)</strong>}
              {!playing && (
                <button onClick={() => onSelectTrackIndex(i)}>
                  {track.title}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default playerContextFilter(PlaylistMenu, [
  'playlist',
  'activeTrackIndex',
  'onSelectTrackIndex',
]);
