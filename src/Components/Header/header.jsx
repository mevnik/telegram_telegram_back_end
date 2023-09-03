import React from 'react';
import Button from '../Button/button.jsx';

import './header.css'

const Header = (props) => {
	return (
		<div className={`header`}>

			<Button onClick = {props.onClick} text = 'close'/>
			<span className={`userename`}>{props.username}</span>
		</div>
		)
}

export default Header;