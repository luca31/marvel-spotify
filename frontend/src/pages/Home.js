import React from 'react'
import Carousel from '../components/Carousel';
import Playlist from '../components/Playlist';

function Home(props) {
  const changePlaylist = index => {
    props.setCurrentPlaylist(props.playlists[index]);
  }

  return(
    <>
      <h1>Marvel Spotify</h1>
      <Carousel playlists={props.playlists} changePlaylist={changePlaylist}></Carousel>
      <Playlist currentPlaylist={props.currentPlaylist} setCurrentSong={props.setCurrentSong}></Playlist>
    </>
  );
}

export default Home;