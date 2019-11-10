import React from 'react';
import './App.css';

import CassetteMediaPlayer from './components/CassetteMediaPlayer/CassetteMediaPlayer';

function App() {
  return (
    <div>
      <header>GraphQL: Podcast Explorer</header>
      <main>
        <CassetteMediaPlayer />
      </main>
      <footer>Copyright &copy; 2019 Rob Brennan. All rights reserved.</footer>
    </div>
  );
}

export default App;
