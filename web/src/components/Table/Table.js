import React from 'react';
import './styles.css';

function Table (props) {
 
  return(
    <div id="table-box" className="table-box">
      <div className="table">
          {props.firstLine}
          {props.data}
      </div>
    </div>
  );
}
 /*
  EXAMPLES:
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

  ------------------------------
  function firstLine(){
    return <div className="firstLine">
            <p>Nome</p>
            <p>Telefone</p>
          </div>
  }
  
  */

export default Table;