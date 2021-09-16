import React from "react";

import Sound from 'react-sound';


const formatTime = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return parseInt(seconds) === 60 ?
    (minutes+1) + ":00" :
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function PlayingBar(props) {
  const [ playingStatus, setPlayingStatus ] = React.useState(Sound.status.STOPPED);
  const [ isPlaying, setIsPlaying ] = React.useState();
  const [ duration, setDuration ] = React.useState(0);
  const [ position, setPosition ] = React.useState(0);

  const switchMusicPlay = () => {
    if(playingStatus === Sound.status.PLAYING) {
      setPlayingStatus(Sound.status.PAUSED);
    } else {
      setPlayingStatus(Sound.status.PLAYING);
    }
  }

  React.useEffect(() => {
    setIsPlaying(playingStatus === Sound.status.PLAYING ? true: false)
  }, [ playingStatus ])

  React.useEffect(() => {
    setPosition(0);
    setDuration(0)
  }, [ props.currentSong ])

  const skipPrevious = () => {
    const currentIndex = props.currentPlaylist.songs.findIndex(e => e === props.currentSong);
    if(currentIndex > 0) {
      props.setCurrentSong(props.currentPlaylist.songs[currentIndex - 1]);
    } else {
      props.setCurrentSong(props.currentPlaylist.songs[props.currentPlaylist.songs.length - 1]);
    }
    setPlayingStatus(Sound.status.PLAYING);
  }

  const skipNext = () => {
    const currentIndex = props.currentPlaylist.songs.findIndex(e => e === props.currentSong);
    if(currentIndex < props.currentPlaylist.songs.length - 1) {
      props.setCurrentSong(props.currentPlaylist.songs[currentIndex + 1]);
    } else {
      props.setCurrentSong(props.currentPlaylist.songs[0]);
    }
    setPlayingStatus(Sound.status.PLAYING);
  }

  return(
    <>
      <div className={'playing-bar'}>
        <div className={'playing-bar-content-start'}>
          <img onClick={skipPrevious} src={'/icons/skip_previous_white_24dp.svg'} alt='skip-previous' />
          { isPlaying ?
            <img onClick={switchMusicPlay} src={'/icons/pause_white_24dp.svg'} alt='pause' />
            :
            <img onClick={switchMusicPlay} src={'/icons/play_arrow_white_24dp.svg'} alt='play' />
          }
          <img onClick={skipNext} src={'/icons/skip_next_white_24dp.svg'} alt='skip-next' />
        </div>
        <div className={'playing-bar-content'}>
          <span>{props.currentSong.title}</span>
          <span className={'hide-on-mobile'}>&nbsp;-&nbsp;</span>
          <span>{props.currentSong.author}</span>
        </div>
        <div className={'playing-bar-content-end'}>
          <span>{formatTime(position)}</span>
          <span className={'hide-on-mobile'}>&nbsp;/&nbsp;</span>
          <span className={'hide-on-mobile'}>{formatTime(duration)}</span>
        </div>
      </div>
      <Sound
        url={'/tracks/' + props.currentSong.track + '-128k.mp3'}
        playStatus={playingStatus}
        onLoading={({duration}) => setDuration(duration)}
        onPlaying={({position}) => setPosition(position)}
        onFinishedPlaying={skipNext}
      />
    </>
  );
}

export default PlayingBar;