import React from 'react'

import './basket.css'


export const Basket = (props) => {

	return (
		<div className = {'container'}>
			<p>It's basket</p>
			<p>{props.count}</p>


			
		</div>

		)
}