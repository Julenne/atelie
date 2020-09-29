import React from 'react';
import './styles.css';

function Table() {
  const data = [
    {name: "Raissa", phone: 999999999},
    {name: "Henrique", phone: 999999999},
    {name: "Maria", phone: 999999999}
  ]
  function clients(array){
    array.map((id) => <b>{id}</b>)
    
  }
  return(
    <div id="table-box" className="table-box">
      <div className="data">
        <div className="firstLine">
          <p>Nome</p>
          <p>Telefone</p>
        </div>
        <div className="clients" id="clients">
          <div className="name">
            {data.map(({name}) => <p>{name}</p>)}
          </div>
          <div className="phone">
            {data.map(({phone}) => <p>{phone}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Table;