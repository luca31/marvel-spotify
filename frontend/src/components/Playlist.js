function Playlist(props) {
  const songsList = props.songs.map((song, index) => {
    return(
      <div onClick={() => props.setCurrentSong(song)} key={index} className={'playlist-element'}>
        <img src={'/images/' + (song.img ? song.img : 'black_placeholder.jpg')} alt={'song icon'} className={'song-icon'}></img>
        <div className={'song-content'}>
          <span className={'song-title'}>{song.title}</span>
          <span className={'song-author'}>{song.author}</span>
        </div>
      </div>
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