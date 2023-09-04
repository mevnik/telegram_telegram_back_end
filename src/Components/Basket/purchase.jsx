import React from 'react'
//import {Products} from '../../ShopData/Store.jsx'


export const Purchase = (props) => {

	return (
		<div className = {'container'}>
			<div className = {'purchase'}>
				<div className = {'count'}>product_click:{props.product.click} product:{props.product.product_id}</div>
			</div>
		</div>

		)
}