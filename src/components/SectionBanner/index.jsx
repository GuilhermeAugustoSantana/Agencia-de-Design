import './style.css'

export const SectionBanner = ({ themeDark }) => {
  return (
    <section className='section-banner'>
      <div className={themeDark ? 'imagemDeFundo_modo_escuro' : 'imagemDeFundo_modo_claro'}></div>
      <div className='banner-title'>
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section >
  );
};