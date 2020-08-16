import React from 'react';
import './styles.css';
import logoAtelier from '../../assets/images/logoAtelier.svg';
import nameAtelier from '../../assets/images/nameAtelier.svg';
function Login() {
  return(
    <div id="login" className="login">
      <div id="logo" className="logo">
        <img src={nameAtelier} alt="Name Atelier" className="nameAtelier"/>
        <img src={logoAtelier} alt="Logo Atelier" className="logoAtelier"/>
      </div>
      <div id="box-login" className="box-login">
        <div id="form" className="form">
          <input type="text" placeholder="login" className="inputs"/>
          <input type="password" placeholder="senha" className="inputs"/>
          <input type="button" value="entrar" className="button" onClick="#"/>
        </div>
      </div>
      <a href="#">Recupere a senha</a>
    </div>
  );
}

export default Login;