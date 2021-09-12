function Playlist(props) {
  if(!props.currentPlaylist) return null;

  const songsList = props.currentPlaylist.songs.map((song, index) => (
    <div onClick={() => props.setCurrentSong(song)} key={index} className={'playlist-element'}>
      <img src={'/images/' + (song.img ? song.img : 'black_placeholder.jpg')} alt={'song icon'} className={'song-icon'}></img>
      <div className={'song-content'}>
        <span className={'song-title'}>{song.title}</span>
        <span className={'song-author'}>{song.author}</span>
      </div>
    </div>
  ));

  return(
    <>
      <h2>{props.currentPlaylist?.name}</h2>
      {songsList}
    </>
  );
}

export default Playlist;