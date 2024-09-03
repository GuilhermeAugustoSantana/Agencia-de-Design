import './style.css'

export const Header = ({ themeDark, handleTheme }) => {
  const imageSun = 'assets/sun.png';
  const imageMoon = 'assets/moon.png'

  return (
    <header className={themeDark ? 'topo_modo_escuro' : 'topo_modo_claro'}>
      <img src="assets/logo.png" alt="logo" />
      <button onClick={() => handleTheme(themeDark)} className={themeDark ? 'btn_modo_escuro' : 'btn_modo_claro'}>
        <img className='iconesBtn' src={themeDark ? imageSun : imageMoon} alt='icon da lua ou do sol' />
      </button>
    </header>
  )
}