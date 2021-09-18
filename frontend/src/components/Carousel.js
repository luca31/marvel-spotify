function Carousel(props) {
  const characterList = props.playlists.map((character, index) => (
    <div className={'carousel-element ' + (props.currentPlaylist && props.currentPlaylist === character ? 'selected' : '')} key={'carousel_' + index} onClick={() => props.changePlaylist(index)}>
      <img src={'/images/' + character.img} alt={character.name}></img>
      <span>{character.name}</span>
    </div>
  ));

  return(
    <>
      <h2>Lista personaggi</h2>
      <div className={'carousel'}>
        {characterList}
      </div>
    </>
  );
} 

export default Carousel;