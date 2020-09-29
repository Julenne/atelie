import React from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
function ClientList(){
  return(
    <div id="client-box" className="client-box">
      <Header />
      <div id="actions" className="actions">
        <input type="button" value="Adicionar Clientes" className="addClients"/>
        <form action="#" className="search" id="search">
          <input type="text" placeholder="Pesquisar clientes" className="searchText"/>
          <input type="submit" value="Ir" className="searchButton"/>
        </form>
        <Table />
      </div>
    </div>
  );
}


export default ClientList;