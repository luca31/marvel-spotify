import React from 'react'
import Carousel from '../components/Carousel';
import Playlist from '../components/Playlist';

function Home(props) {
  const changePlaylist = index => {
    props.setCurrentPlaylist(props.playlists[index]);
  }

  return(
    <>
      <section>
        <Carousel playlists={props.playlists} currentPlaylist={props.currentPlaylist} changePlaylist={changePlaylist}></Carousel>
      </section>
      <section>
        <Playlist currentPlaylist={props.currentPlaylist.songs} name={props.currentPlaylist.name} setCurrentSong={props.setCurrentSong} currentSong={props.currentSong}></Playlist>
      </section>
    </>
  );
}

export default Home;