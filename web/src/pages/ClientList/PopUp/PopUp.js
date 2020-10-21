import React from 'react';
import './styles.css';


function PopUp() {
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
        
        <input type="submit" className="btnSubmit" value="Adicionar" />
      </form>
    </div>
  );
}

export default PopUp;