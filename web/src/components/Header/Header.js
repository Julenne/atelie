import React from 'react';
import './styles.css';
import icon from '../../assets/images/bigIcon.svg';
import nameAtelier from '../../assets/images/nameAtelier2.svg';
function Header() {
  return(
    <header id="header" className="header">
      <div className="logo" id="logo">
        <img src={icon} alt="" className="icon"/>
        <img src={nameAtelier} alt="" className="nameAtelier"/>
      </div>
    </header>
  );
}
export default Header;