import React from "react";

const formatTime = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return parseInt(seconds) === 60 ?
    (minutes+1) + ":00" :
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function PlayingBar(props) {
  const [ duration, setDuration ] = React.useState();

  React.useEffect(() => {
    setDuration(props.duration);
  }, [props.duration] );

  const skipPrevious = () => {
    const currentIndex = props.currentPlaylist.songs.findIndex(e => e === props.currentSong);
    if(currentIndex > 0) {
      props.setCurrentSong(props.currentPlaylist.songs[currentIndex - 1]);
    } else {
      props.setCurrentSong(props.currentPlaylist.songs[props.currentPlaylist.songs.length - 1]);
    }
  }

  const skipNext = () => {
    const currentIndex = props.currentPlaylist.songs.findIndex(e => e === props.currentSong);
    if(currentIndex < props.currentPlaylist.songs.length - 1) {
      props.setCurrentSong(props.currentPlaylist.songs[currentIndex + 1]);
    } else {
      props.setCurrentSong(props.currentPlaylist.songs[0]);
    }
  }

  return(
    <div className={'playing-bar'}>
      <div className={'playing-bar-content-start'}>
        <img onClick={skipPrevious} src={'/icons/skip_previous_white_24dp.svg'} alt='skip-previous' />
        { props.isPlaying ? <img onClick={props.switchMusicPlay} src={'/icons/pause_white_24dp.svg'} alt='pause' /> : <img onClick={props.switchMusicPlay} src={'/icons/play_arrow_white_24dp.svg'} alt='play' />}
        <img onClick={skipNext} src={'/icons/skip_next_white_24dp.svg'} alt='skip-next' />
      </div>
      <div className={'playing-bar-content'}>
        <span>{props.currentSong.title}</span>
        <span className={'hide-on-mobile'}>&nbsp;-&nbsp;</span>
        <span>{props.currentSong.author}</span>
      </div>
      <div className={'playing-bar-content-end'}>
        <span>0:00</span>
        <span className={'hide-on-mobile'}>&nbsp;/&nbsp;</span>
        <span className={'hide-on-mobile'}>{duration ? formatTime(duration) : null}</span>
      </div>
    </div>
  );
}

export default PlayingBar;