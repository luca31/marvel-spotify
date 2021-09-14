import React from 'react';

import useSound from 'use-sound';
import NavBar from './components/NavBar';
import PlayingBar from './components/PlayingBar';
import Home from './pages/Home';
import History from './pages/History';

import playlists from './playlists.json';


function App() {
  const [ currentPlaylist, setCurrentPlaylist ] = React.useState(playlists[0]);
  const [ currentSong, setCurrentSong ] = React.useState(playlists[0].songs[0]);
  const [ isPlaying, setIsPlaying ] = React.useState(false);
  const [ history, setHistory ] = React.useState([]);
  const [ page, changePage ] = React.useState('home');

  const [play, { stop, pause, duration }] = useSound( '/tracks/' + currentSong.track + '-128k.mp3' );

  const changeSong = song => {
    setIsPlaying(false);
    stop();
    setCurrentSong(song);
    if(!history.includes(song)) setHistory(history.concat(song));
  }

  const switchMusicPlay = () => {
    if(isPlaying) {
      setIsPlaying(false);
      pause();
    } else {
      setIsPlaying(true);
      play();
    }
  }

  return (
    <>
      <NavBar changePage={changePage}></NavBar>
      <div id={'main'}>
        { page === 'home' ? <Home playlists={playlists} setCurrentSong={changeSong} currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist}></Home> : null }
        { page === 'history' ? <History history={history} setHistory={setHistory} setCurrentSong={changeSong} /> : null }
      </div>
      <PlayingBar currentSong={currentSong} isPlaying={isPlaying} switchMusicPlay={switchMusicPlay} duration={duration} currentPlaylist={currentPlaylist} setCurrentSong={changeSong}></PlayingBar>
    </>
  );
}

export default App;