import React from 'react';
import './styles.css';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
function ClientList(){
  const data = [
    {name: "Raissa", phone: 999999999},
    {name: "Ursula", phone: 999999999},
    {name: "Maria", phone: 999999999}
  ]

  function clients(array){
    return <div className="data">
            <div>{array.map(({name}) => <p>{name}</p>)}</div> 
            <div>{array.map(({phone}) => <p>{phone}</p>)}</div>
          </div>
  }
  
  function firstLine(){
    return <div className="firstLine">
            <p>Nome</p>
            <p>Telefone</p>
          </div>
  }
  //const result = clients(data);
  return(
    <div id="client-box" className="client-box">
      <Header />
      <div id="actions" className="actions">
        <input type="button" value="Adicionar Clientes" className="addClients"/>
        <form action="#" className="search" id="search">
          <input type="text" placeholder="Pesquisar clientes" className="searchText"/>
          <input type="submit" value="Ir" className="searchButton"/>
        </form>  
      </div>
      <Table data={clients(data)} firstLine={firstLine()}/>
    </div>
  );
}


export default ClientList;