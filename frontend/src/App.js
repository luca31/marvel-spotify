import React from 'react';

import NavBar from './components/NavBar';
import PlayingBar from './components/PlayingBar';
import Home from './pages/Home';
import History from './pages/History';
import Settings from './pages/Settings';

import playlists from './playlists.json';


function App() {
  const [ currentPlaylist, setCurrentPlaylist ] = React.useState(playlists[0]);
  const [ currentSong, setCurrentSong ] = React.useState(playlists[0].songs[0]);
  const [ history, setHistory ] = React.useState([]);
  const [ theme, setTheme ] = React.useState('black');
  const [ page, changePage ] = React.useState('home');

  const changeSong = song => {
    setCurrentSong(song);
    setHistory([song].concat([...history].filter(e => e !== song)));
  }

  return (
    <>
      <NavBar changePage={changePage} theme={theme}></NavBar>
      <div id={'main'}>
        { page === 'home' ? <Home theme={theme} playlists={playlists} currentSong={currentSong} setCurrentSong={changeSong} currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist}></Home> : null }
        { page === 'history' ? <History theme={theme} history={history} setHistory={setHistory} currentSong={currentSong} setCurrentSong={changeSong} /> : null }
        { page === 'settings' ? <Settings theme={theme} setTheme={setTheme} /> : null }
      </div>
      <PlayingBar currentSong={currentSong} currentPlaylist={currentPlaylist} setCurrentSong={changeSong} theme={theme}></PlayingBar>
    </>
  );
}

export default App;