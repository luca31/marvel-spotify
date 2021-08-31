function Playlist(props) {
  const songsList = props.songs.map((song, index) => {
    return(
      <div key = {index} className = {'playlist-element'}>
        <span className = {'song-title'}>{song.title}</span>
        <span className = {'song-author'}>{song.author}</span>
      </div>
    )
  })
  return(
    <>
      <h1>Playlist</h1>
      {songsList}

    </>
  );
} 
export default Playlist;