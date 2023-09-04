import React from 'react'
//import {Products} from '../../ShopData/Store.jsx'


export const Purchase = (props) => {

	return (
		<div className = {'container'}>
			<div className = {'purchase'}>
				
				<div className = {'count'}>{props.count}t</div>
				<div className = {'count'}>{props.basket[0]}t</div>
			</div>
		</div>

		)
}