import React, {useState} from 'react'
import './productList.css'
import {Item} from '../ProductItem/productitem.jsx'
import {Products} from '../../../ShopData/Store.jsx'
import Button from '../../Button/button.jsx';



export const ProductList = () => {

	const[all_price, setAll_price] = useState(0)
	const editPrice = (value) => {
			setAll_price(all_price + value)
	}

	return(

			<div>
				<div className="listContainer">
					{
						Products.map((item) => 
							<Item key = {item.id} 
							title = {item.title} 
							description = {item.description}
							 price = {item.price} 
							 img = {item.img}
							 editPrice = {editPrice}
							 />
						)
					}
				</div>
				<div className = {'Item'}>Sum in basket:{all_price}$</div>
				<Button ></Button>

			</div>

		)
	}
