function NavBar(props) {
  return(
    <nav className={'nav-bar'}>
      <span onClick={() => props.changePage('home')}>HOME</span>
      <span onClick={() => props.changePage('history')}>HISTORY</span>
    </nav>
  );
}

export default NavBar;