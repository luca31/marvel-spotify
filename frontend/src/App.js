import React from 'react';

import PlayingBar from './components/PlayingBar';
import Home from './pages/Home';

const playlists = [
  {
    name: 'personaggio 1',
    img: 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg',
    songs: [
      {
        title: 'song1',
        author: 'author1'
      },
      {
        title: 'song2',
        author: 'author2'
      }
    ]
  },
  {
    name: 'personaggio 2',
    img: 'https://wallpapercave.com/wp/wp8269648.jpg',
    songs: [
      {
        title: 'song3',
        author: 'author3'
      },
      {
        title: 'song4',
        author: 'author4'
      }
    ]
  },
  {
    name: 'personaggio 3',
    img: 'https://images.pexels.com/photos/5007442/pexels-photo-5007442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    songs: [
      {
        title: 'song5',
        author: 'author5'
      },
      {
        title: 'song6',
        author: 'author6'
      }
    ]
  },
  {
    name: 'personaggio 4',
    img: 'https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg',
    songs: [
      {
        title: 'song7',
        author: 'author7'
      },
      {
        title: 'song8',
        author: 'author8'
      }
    ]
  }
]

function App() {
  const [ currentSong, setCurrentSong ] = React.useState({
    title: 'song1',
    author: 'author1'
  });

  return (
    <>
      <div id={'main'}>
        <Home playlists={playlists}></Home>
      </div>
      <PlayingBar currentSong={currentSong}></PlayingBar>
    </>
  );
}

export default App;