import React from 'react'
import './basket.css'
import {Products} from '../../ShopData/Store.jsx'


export const Purchase = (props) => {
	const product = Products.find((item) => item.id === props.product_id)

	return (
		<div className = {'container'}>
			<div className = {'purchase'}>
				<div className = {'img'}>eee</div>
				<div className = {'result'}>
					<div className = {'block_mini'}>{product.product.price}</div>
					<div className = {'block_mini'}>Sum:123</div>
				</div>
			</div>
		</div>

		)

/*
	return (
		<div className = {'container'}>
			<div className = {'purchase'}>
				<div className = {'img'}><img src = {product.img} alt = 'purchase'/></div>
				<div className = {'result'}>
					<div className = {'block_mini'}>Price:{product.price}</div>
					<div className = {'block_mini'}>Sum:{ product.price * props.product.click}</div>
				</div>
			</div>
		</div>

		)
		*/
}