import React from 'react';
import './styles.css';

function Option(props){
  return(
        <label htmlFor={props.id} className="notSelectable">
          {props.value}  
          <input type="radio" className="input" name={props.value} defaultValue={false} id={props.id} />
        </label>
  );
}

export default Option;