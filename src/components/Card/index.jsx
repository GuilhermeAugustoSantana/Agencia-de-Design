import './style.css'
export const Card = ({ date, title, company, desc, themeDark }) => {
  return (
    <div className={themeDark ? 'card_modo_escuro ' : 'card_modo_claro'}>
      <div className="container">
        <p>{date}</p>
        <h3>{title}</h3>
        <small>{company}</small>
      </div>

      <p>{desc}</p>
    </div>
  );
}