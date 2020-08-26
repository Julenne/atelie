import React from 'react';
import './styles.css';

function Option(props){
  return(
      <div>
        <label htmlFor={props.value} className="notSelectable">
          {props.value}  
          <input type="checkbox" className="input" name={props.value} defaultValue={false} onClick={isChecked()} id={props.value} />
        </label>
      </div>
  );
}

function isChecked(){
  if(document.getElementsByClassName('input').autocomplete) 
  alert('oi');
}

export default Option;