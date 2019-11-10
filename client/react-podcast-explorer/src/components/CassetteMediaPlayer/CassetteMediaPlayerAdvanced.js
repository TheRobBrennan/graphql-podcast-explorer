import React from 'react';

// Cassette Media Player - https://benwiley4000.github.io/cassette/styleguide/#cassette-quick-start
import { MediaPlayer } from '@cassette/player';
import './CassetteMediaPlayer.css';

// Custom playback control
import PlaybackRateControl from './PlaybackRateControl';

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
    <MediaPlayer
      playlist={playlist}
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
  );
};
