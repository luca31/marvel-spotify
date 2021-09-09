function PlayingBar(props) {
  return(
    <div className={'playing-bar'}>
      <img src={'./icons/skip_previous_white_24dp.svg'} alt='skip-previous' />
      <img src={'./icons/play_arrow_white_24dp.svg'} alt='play' />
      <img src={'./icons/skip_next_white_24dp.svg'} alt='skip-next' />
      <div className={'playing-bar-content'}>
        {props.currentSong.title}
      </div>
      <div className={'playing-bar-content-end'}>
        1:07 / 3:12
      </div>
    </div>
  );
}

export default PlayingBar;