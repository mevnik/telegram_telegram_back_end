import React from 'react'
import {Purchase} from './purchase'
import './basket.css'


export const Basket = (props) => {

	return (
		<div className = {'container'}>
			<p>It's basket</p>
			<p>{props.count}</p>




			<Purchase count = {props.count} basket = {props.basket} />



		</div>

		)
}