import Home from './pages/Home';

const playlists = [
  {
    name: 'personaggio 1',
    img: 'https://images.pexels.com/photos/5007442/pexels-photo-5007442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
  }
]

function App() {
  return (
    <Home playlists = {playlists}></Home>
  );
}

export default App;