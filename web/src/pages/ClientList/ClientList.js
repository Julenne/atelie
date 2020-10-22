import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import PopUp from './PopUp/PopUp';
function ClientList(){
  const data = [
    {name: "Raissa", phone: 999999999},
    {name: "Ursula", phone: 999999999},
    {name: "Maria", phone: 999999999},
    {name: "Maria", phone: 999999999},
    {name: "Maria", phone: 999999999},
    {name: "Maria", phone: 999999999},
    {name: "Maria", phone: 999999999},
    {name: "Maria", phone: 999999999},
    {name: "Maria", phone: 999999999},
  ]

  function clients(array){
    return <div className="data">
            <div>{array.map(({name}) => <p>{name}</p>)}</div> 
            <div>{array.map(({phone}) => <p>{phone}</p>)}</div>
          </div>
  }

  function search(){
    var string = document.getElementById("searchClients").value;
    var regex = new RegExp(string);
    var table = document.getElementById("table-box")

    var map1 = data.map(({name}) => {
      if(name == regex) {
        return <div className="data">
            <div>{data.map(({name}) => <p>{name}</p>)}</div> 
            <div>{data.map(({phone}) => <p>{phone}</p>)}</div>
          </div>
      }
    })
    ReactDOM.render(map1, table);
  }

  function openForm() {
    document.getElementById('popup').style.display = "block"
  }
  function closeForm(){
    document.getElementById('popup').style.display = "none"
  }
  function firstLine(){
    return <div className="firstLine">
            <p>Nome</p>
            <p>Telefone</p>
          </div>
  }

  return(
    <div id="client-box" className="client-box">
      <Header />
      <div id="actions" className="actions">
        <input type="button" value="Adicionar Clientes" className="addClients"
         onClick={openForm}/>
        <div id="searchButton">
          <form action="#" className="search" id="search">
            <button type="submit" onClick={search}></button>
            <input type="text" id="searchClients"placeholder="Pesquisar clientes" 
            className="searchText"/>
          </form>
        </div>
      </div>
      <PopUp close={closeForm}/>
      <Table data={clients(data)} firstLine={firstLine()}/>
    </div>
  );
}

export default ClientList;