import React from 'react'
import {Purchase} from './purchase'
import './basket.css'


export const Basket = (props) => {

	return (
		<div className = {'container'}>
		{ props.basket.map((item) => 

			<Purchase
				key={item.id}
				id = {item.id}
			/>
		)
		}
		</div>

		)
}