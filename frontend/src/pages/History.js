import React from 'react'
import Playlist from '../components/Playlist';

function Home(props) {

  const clearHistory = index => {
    props.setHistory([]);
  }

  return(
    <>
      <h1>
        Cronologia
        <img src={'/icons/delete_black_24dp.svg'} onClick={clearHistory} alt={'clear history'} />
      </h1>
      <Playlist currentPlaylist={props.history} setCurrentSong={props.setCurrentSong} name={'Qui sono mostrate le ultime canzoni che hai ascoltato'}></Playlist>
    </>
  );
}

export default Home;