import React from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import Option from '../../components/Option/Option';
function Menu() {
  return(
    <div id="menu" className="menu">
      <Header />
      <div className="wrap">
        <Option value="Relatórios"/>
        <Option value="Oi"/>
      </div>
    </div>
  );
}

export default Menu;