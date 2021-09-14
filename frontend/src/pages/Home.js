import React from 'react'
import Carousel from '../components/Carousel';
import Playlist from '../components/Playlist';

function Home(props) {
  const changePlaylist = index => {
    props.setCurrentPlaylist(props.playlists[index]);
  }

  return(
    <>
      <Carousel playlists={props.playlists} changePlaylist={changePlaylist}></Carousel>
      <Playlist currentPlaylist={props.currentPlaylist.songs} name={props.currentPlaylist.name} setCurrentSong={props.setCurrentSong}></Playlist>
    </>
  );
}

export default Home;