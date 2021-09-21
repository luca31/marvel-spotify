import formatTime from "../utilities/formatTime";

function Playlist(props) {
  if(!props.currentPlaylist) return null;

  const songsList = props.currentPlaylist.map((song, index) => (
    <div onClick={() => props.setCurrentSong(song)} key={index} className={'playlist-element '+ (props.currentSong && props.currentSong === song ? 'selected' : '')}>
      <img src={'./images/' + (song.img ? song.img : 'black_placeholder.jpg')} alt={'song icon'} className={'song-icon'}></img>
      <div className={'song-content'}>
        <span className={'song-title'}>{song.title}</span>
        <span className={'song-author'}>{song.author}</span>
      </div>
      <div className={'song-content-end'}>
        <span>{formatTime(song.duration)}</span>
      </div>
    </div>
  ));

  return(
    <>
      { props.name ? <h2>{props.name}</h2> : null }
      {songsList}
    </>
  );
}

export default Playlist;