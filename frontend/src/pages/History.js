import React from 'react'
import Playlist from '../components/Playlist';

function Home(props) {

  const clearHistory = index => {
    props.setHistory([]);
  }

  return(
    <section>
      <h1>
        Cronologia
        <img src={'./icons/delete_black_24dp.svg'} onClick={clearHistory} alt={'clear history'} />
      </h1>
      <Playlist currentPlaylist={props.history} currentSong={props.currentSong} setCurrentSong={props.setCurrentSong} name={'Qui sono mostrate le ultime canzoni che hai ascoltato'} />
    </section>
  );
}

export default Home;