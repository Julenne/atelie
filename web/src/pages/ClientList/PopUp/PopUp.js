import React from 'react';
import './styles.css';


function PopUp(props) {
  return (
    <div className="box-popup" id="popup">
      <form action="" className="form-popup" >
        <p className="title">Adicionar Cliente</p>

        <div className="nameDiv">
          <label for="nome" className="nameLabel"><b>Nome:</b></label>
          <input type="text" placeholder="Ex: Maria" className="nameInput" name="nome" required />
        </div>
        
        <div className="telDiv">
          <label for="tel" className="telLabel"><b>Telefone:</b></label>
          <input type="tel" placeholder="Ex: 99 999999999" className="telInput" name="tel" required />
        </div>
        
        <div className="buttons">
          <input type="submit" className="btnSubmit" value="Adicionar" />
          <input type="button" className="btnBack" value="Voltar" onClick={props.close}/>
        </div>
        
        
      </form>
    </div>
  );
}

export default PopUp;