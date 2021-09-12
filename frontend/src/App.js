import React from 'react';

import useSound from 'use-sound';

import PlayingBar from './components/PlayingBar';
import Home from './pages/Home';

import playlists from './playlists.json';

function App() {
  const [ currentSong, setCurrentSong ] = React.useState(playlists[0].songs[0]);
  const [ isPlaying, setIsPlaying ] = React.useState(false);

  const [play, { stop, pause, duration }] = useSound( './tracks/' + currentSong.track + '-128k.mp3' );

  const changeSong = song => {
    setIsPlaying(false);
    stop();
    setCurrentSong(song);
  }

  const switchMusicPlay = () => {
    if(isPlaying) {
      setIsPlaying(false)
      pause()
    } else {
      setIsPlaying(true)
      play()
    }
  }

  return (
    <>
      <div id={'main'}>
        <Home playlists={playlists} setCurrentSong={changeSong}></Home>
      </div>
      <PlayingBar currentSong={currentSong} isPlaying={isPlaying} switchMusicPlay={switchMusicPlay} duration={duration}></PlayingBar>
    </>
  );
}

export default App;