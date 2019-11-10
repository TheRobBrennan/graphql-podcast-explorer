import React from 'react';

// Cassette Media Player - https://benwiley4000.github.io/cassette/styleguide/#cassette-quick-start
import { MediaPlayerControls } from '@cassette/player';
import { PlayerContextProvider } from '@cassette/core';
import './CassetteMediaPlayer.css';

// Custom playback control and menu
import PlaybackRateControl from './PlaybackRateControl';
import PlaylistMenu from './PlaylistMenu';

// TODO: Replace hard-coded playlist
const playlist = [
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Big Buck Bunny',
  },
  {
    url:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    title: 'Elephants Dream',
  },
];

export default () => {
  return (
    <PlayerContextProvider playlist={playlist}>
      <MediaPlayerControls
        showVideo
        controls={[
          'spacer',
          'backskip',
          'playpause',
          'forwardskip',
          'mute',
          playerContext => (
            <PlaybackRateControl
              playbackRate={playerContext.playbackRate}
              onSetPlaybackRate={playerContext.onSetPlaybackRate}
            />
          ),
          'spacer',
          'progress',
        ]}
      />
      <div>
        <h3>Select a track:</h3>
        <PlaylistMenu />
      </div>
    </PlayerContextProvider>
  );
};
