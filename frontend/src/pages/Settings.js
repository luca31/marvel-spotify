import React from 'react'

function Settings(props) {
  const themes = [
    {name: 'Rosso', class: 'red'},
    {name: 'Blu', class: 'blue'},
    {name: 'Nero', class: 'black'},
    {name: 'Verde', class: 'green'}
  ]

  const themesList = themes.map((theme, index) => (
    <div onClick={() => props.setTheme(theme.class)} className={'colour'} key={'theme_'+index}>
      <div className={'colour-demo ' + theme.class + (theme.class===props.theme ? ' selected' : '') } />
      {theme.name}
    </div>
  ))

  return(
    <>
      <section>
        <h1 className={'text-'+props.theme}>Impostazioni</h1>
        <h2>Seleziona un tema</h2>
        <div className={'colour-settings'}>
          {themesList}
        </div>
      </section>
      <section>
        <h2>Informazioni</h2>
        Marvel Spotify - Web app creata da Elisa Romano e Luca Colli.
      </section>
    </>
  );
}

export default Settings;