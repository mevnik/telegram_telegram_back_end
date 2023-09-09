import React, {useState} from 'react'
import './basket.css'
import {Products} from '../../ShopData/Store.jsx'




export const Purchase = (props) => {
	const product = Products.find((item) => item.id === props.product.product_id).product

const [count, setCount] = useState(props.product.click)

const onClick = (e) => {
const newCount = count
if(e.target.value === '+') setCount(newCount+1)
if(e.target.value === '-') setCount(newCount-1)
props.onClick(props.product.product_id,count)
}

	return (
		<div className = {'container_purchase'}>
			<div className = {'purchase'}>
				<div >
					<img className = {'img_basket'} src = {product.img} alt = 'purchase'/>
				</div>
				<div className = {'result'}>
					<div className = {'block_mini'}>Price:{product.price}</div>
					<div className = {'block_mini'}>{count}</div>
					<div className = {'block_mini'}>Sum:{ product.price * props.product.click}</div>
				</div>
				<div className = {'purchase_edit'}>
					<input value = '+' product_id = {props.product.product_id} type = 'button' onClick={onClick}/>
					<input value = '-' product_id = {props.product.product_id} type = 'button' onClick={onClick}/>
					
				</div>
			</div>
		</div>

		)
}