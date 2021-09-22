function NavBar(props) {
  return(
    <nav className={'nav-bar ' + props.theme}>
      <span onClick={() => props.changePage('home')}>Home</span>
      <span onClick={() => props.changePage('history')}>Cronologia</span>
      <span onClick={() => props.changePage('settings')}>Impostazioni</span>
    </nav>
  );
}

export default NavBar;