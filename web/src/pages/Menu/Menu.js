import React from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import Option from '../../components/Option/Option';

function generateId() {
  var max = 1000;
  var min = 10;
  return Math.random() * (max - min) + min;
}

function Menu() {
  return(
    <div id="menu" className="menu">
      <Header />
      <div className="flex">
        <form className="column">
          <div className="wrap">
            <Option value="Clientes" id={generateId()}/>
            <Option value="Tabela de Preço" id={generateId()}/>
            <Option value="Consertos" id={generateId()}/>
            <Option value="Relatórios" id={generateId()}/>
            <Option value="Relatórios" id={generateId()}/>
            <Option value="Relatórios" id={generateId()}/>
            <Option value="Relatórios" id={generateId()}/>
          </div>
          <button type="submit">Ir</button>
        </form>
      </div>
    </div>
  );
}

export default Menu;