function Carousel(props) {
  const characterList = props.playlists.map((character, index) => {
    return(
      <div key = {index} onClick = {() => props.changePlaylist(index)}>{character.name}</div>
    )
  })

  return(
    <>
      <h1>Lista personaggi</h1>
      {characterList}
    </>
  );
} 
export default Carousel;