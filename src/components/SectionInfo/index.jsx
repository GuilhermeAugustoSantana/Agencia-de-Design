import { Card } from "../Card";
import './style.css'

export const SectionInfo = ({ themeDark }) => {
  return (
    <section className={themeDark ? 'secao_modo_escuro' : 'secao_modo_claro'}>
      <div className="conteiner_texto">
        <h2>Experiências De Trabalho</h2>
        <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.</p>
      </div>
      <div className="conteiner_cards">
        <Card
          themeDark={themeDark}
          date='JUNHO 2012 - 2016' title='Web Designer'
          company='Pied Piper StartUp.' desc='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores'
        />

        <Card
          themeDark={themeDark}
          date='AGOSTO 2016 - 2019' title='Product Designer'
          company='E Corp.'
          desc='Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra'
        />
        <Card
          themeDark={themeDark}
          date='FEVEREIRO 2019 - 2021' title='Digital Consulting' company='Arasaka Inc.' desc='Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'
        />
      </div>
    </section >
  );
};