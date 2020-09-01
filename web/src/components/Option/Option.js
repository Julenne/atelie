import React from 'react';
import './styles.css';

function Option(props){
  return(
    <div>
      <label htmlFor={props.id} className="notSelectable">
        {props.value}  
        <input type="radio" className="input" name="option" id={props.id}/>
      </label>
    </div>
  );
}

export default Option;