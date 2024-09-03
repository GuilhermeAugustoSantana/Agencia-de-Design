import './style.css'

export const Footer = ({ themeDark }) => {
  return (
    <footer className={themeDark ? 'rodape_modo_escuro' : 'rodape_modo_claro'}>
      <div className="container_informacoes">
        <div>
          <img src="assets/logo.png" alt="logo" />
          <p className='paragrafo'>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.</p>
        </div>
        <div>
          <img src="assets/facebook.png" alt="logo do facebook" />
          <img src="assets/twitter.png" alt="logo do twitter" />
          <img src="assets/linkedin.png" alt="logo do linkedin" />
          <img src="assets/dribble.png" alt="logo do dribble" />
          <img src="assets/behance.png" alt="logo da behance" />
          <img src="assets/google-plus.png" alt="logo do google-plus" />
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright 2022 <span>Guilherme Santana</span></p>
      </div>
    </footer>
  );
};