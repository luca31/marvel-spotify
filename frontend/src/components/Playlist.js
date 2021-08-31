function Playlist(props) {
  const songsList = props.songs.map((song, index) => {
    return(
      <div key = {index}>{song.title}</div>
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