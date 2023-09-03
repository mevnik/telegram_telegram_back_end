import React from 'react';
import './button.css'

const Button = (props) => {
	return <button {...props} onClick = {props.onClick} className={`button`}>{props.text}</button>;
}

export default Button;