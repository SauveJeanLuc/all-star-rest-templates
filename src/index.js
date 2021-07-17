import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';

function TemplateList() {
  return (
    <section className="templatelist">
      <Template />
      <Template />
      <Template />
      <Template />
      <Template />
    </section>
  );
};

const Template = () =>{
  return (
  <article className="template">
    <Image/>
    <Title/>
    <Author/>
  </article>
  );
}
const Image = () => (
  <img src="https://jooinn.com/images/library-37.jpg" width="300px" alt="" />
);

const Title = () => <h1>Library MIS REST</h1>

const Author = () => <h4 style={{color:'#617d98', fontSize:'0.75rem', marginTop: '0.25rem' }}>SAUVÉ Jean-Luc</h4>;
ReactDom.render(<TemplateList/>, document.getElementById('root'));
