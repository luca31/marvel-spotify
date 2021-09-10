import React from 'react';

import useSound from 'use-sound';

import PlayingBar from './components/PlayingBar';
import Home from './pages/Home';

const playlists = [
  {
    name: 'personaggio 1',
    img: 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg',
    songs: [
      {
        title: 'song1',
        author: 'author1',
        track: 'music-test.mp3'
      },
      {
        title: 'song2',
        author: 'author2',
        track: 'music2.mp3'
      }
    ]
  },
  {
    name: 'personaggio 2',
    img: 'https://wallpapercave.com/wp/wp8269648.jpg',
    songs: [
      {
        title: 'song3',
        author: 'author3',
        track: 'music-test.mp3'
      },
      {
        title: 'song4',
        author: 'author4',
        track: 'music2.mp3'
      }
    ]
  },
  {
    name: 'personaggio 3',
    img: 'https://images.pexels.com/photos/5007442/pexels-photo-5007442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    songs: [
      {
        title: 'song5',
        author: 'author5',
        track: 'music-test.mp3'
      },
      {
        title: 'song6',
        author: 'author6',
        track: 'music2.mp3'
      }
    ]
  },
  {
    name: 'personaggio 4',
    img: 'https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg',
    songs: [
      {
        title: 'song7',
        author: 'author7',
        track: 'music-test.mp3'
      },
      {
        title: 'song8',
        author: 'author8',
        track: 'music2.mp3'
      }
    ]
  }
]

function App() {
  const [ currentSong, setCurrentSong ] = React.useState(playlists[0].songs[0]);
  const [ isPlaying, setIsPlaying ] = React.useState(false);

  const [play, { stop, pause, duration }] = useSound(
    './tracks/' + currentSong.track,
    { volume: 0.5 }
  );

  const changeSong = song => {
    setIsPlaying(false);
    stop();
    setCurrentSong(song);
  }

  const switchMusicPlay = () => {
    if(isPlaying) {
      setIsPlaying(false)
      pause()
    } else {
      setIsPlaying(true)
      play()
    }
  }

  return (
    <>
      <div id={'main'}>
        <Home playlists={playlists} setCurrentSong={changeSong}></Home>
      </div>
      <PlayingBar currentSong={currentSong} isPlaying={isPlaying} switchMusicPlay={switchMusicPlay} duration={duration}></PlayingBar>
    </>
  );
}

export default App;