import React from 'react'
import {Purchase} from './purchase'
import './basket.css'


export const Basket = (props) => {

	return (
		<div className = {'container_basket'}>
			<p>In Your basket</p>

			{props.basket.map((product) =>

			<Purchase key = {product.id} product = {product} />

			)}





		</div>

		)
}