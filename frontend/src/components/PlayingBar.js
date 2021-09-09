function PlayingBar(props) {
  return(
    <div className={'playing-bar'}>
      <div className={'playing-bar-content-start'}>
        <img src={'./icons/skip_previous_white_24dp.svg'} alt='skip-previous' />
        { props.isPlaying ? <img src={'./icons/pause_white_24dp.svg'} alt='pause' /> : <img src={'./icons/play_arrow_white_24dp.svg'} alt='play' />}
        <img src={'./icons/skip_next_white_24dp.svg'} alt='skip-next' />
      </div>
      <div className={'playing-bar-content'}>
        <span>{props.currentSong.title}</span>
        <span className={'hide-on-mobile'}>&nbsp;-&nbsp;</span>
        <span>{props.currentSong.author}</span>
      </div>
      <div className={'playing-bar-content-end'}>
        <span>1:07</span>
        <span className={'hide-on-mobile'}>&nbsp;/&nbsp;</span>
        <span className={'hide-on-mobile'}>3:12</span>
      </div>
    </div>
  );
}

export default PlayingBar;