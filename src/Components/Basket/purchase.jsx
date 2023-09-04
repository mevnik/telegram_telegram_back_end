import React from 'react'
import {Products} from '../../ShopData/Store.jsx'


export const Purchase = (props) => {

	return (
		<div className = {'container'}>
			<div className = {'purchase'}>
				<img className = {'img'} src = {Products.props.id.product.img} alt = "vot" />
				<div className = {'count'}>props.count</div>
			</div>
		</div>

		)
}