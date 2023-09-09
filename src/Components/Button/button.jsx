import React from 'react';
import './button.css'

const Button = (props) => {
const onClick = () =>{
	props.onClick(props.product_id, props.option)
}

	return <button onClick = {onClick} className={`button`}>{props.text}</button>;
}

export default Button;