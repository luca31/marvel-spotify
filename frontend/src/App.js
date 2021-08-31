import Home from './pages/Home'
const playlists = [
  {
    name: 'prova',
    img: '',
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
    name: 'prova2',
    img: '',
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