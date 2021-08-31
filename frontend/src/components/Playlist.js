function Playlist(props) {
  const songsList = props.songs.map((song, index) => {
    return(
      <div key = {index}>{song.title}</div>
    )
  })
  return(
    <>
      <h2>Playlist</h2>
      {songsList}

    </>
  );
}

export default Playlist;