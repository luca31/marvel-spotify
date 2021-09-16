import React from 'react';

import NavBar from './components/NavBar';
import PlayingBar from './components/PlayingBar';
import Home from './pages/Home';
import History from './pages/History';

import playlists from './playlists.json';


function App() {
  const [ currentPlaylist, setCurrentPlaylist ] = React.useState(playlists[0]);
  const [ currentSong, setCurrentSong ] = React.useState(playlists[0].songs[0]);
  const [ history, setHistory ] = React.useState([]);
  const [ page, changePage ] = React.useState('home');

  const changeSong = song => {
    setCurrentSong(song);
    if(!history.includes(song)) setHistory(history.concat(song));
  }

  return (
    <>
      <NavBar changePage={changePage}></NavBar>
      <div id={'main'}>
        { page === 'home' ? <Home playlists={playlists} setCurrentSong={changeSong} currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist}></Home> : null }
        { page === 'history' ? <History history={history} setHistory={setHistory} setCurrentSong={changeSong} /> : null }
      </div>
      <PlayingBar currentSong={currentSong} currentPlaylist={currentPlaylist} setCurrentSong={changeSong}></PlayingBar>
    </>
  );
}

export default App;