import React from 'react'
import {Purchase} from './purchase'
import './basket.css'


export const Basket = (props) => {

	return (
		<div className = {'container'}>
			<p>It's basket</p>
			<p>{props.count}</p>


			{ props.basket.map((item) => 

				<Purchase
					key={item.id}
					id = {item.id}
					count = {5}
				/>
			)
			}
		</div>

		)
}