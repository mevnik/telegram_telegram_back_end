import React from 'react';
import './button.css'

const Button = (props) => {
	return <button {...props} onClick = {props.onClose} className={`button`}>{props.text}</button>;
}

export default Button;