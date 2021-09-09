import React from 'react'
import Carousel from '../components/Carousel';
import Playlist from '../components/Playlist';
function Home(props) {
  const [currentPlaylist, setCurrentPlaylist] = React.useState([]) 
  function changePlaylist(index) {
    
    setCurrentPlaylist(props.playlists[index].songs)
    
  }
  return(
    <>
      <h1>Marvel Spotify</h1>
      <Carousel playlists={props.playlists} changePlaylist={(index) => changePlaylist(index)}></Carousel>
      <Playlist songs={currentPlaylist} setCurrentSong={props.setCurrentSong}></Playlist>
    </>
  );
}

export default Home;