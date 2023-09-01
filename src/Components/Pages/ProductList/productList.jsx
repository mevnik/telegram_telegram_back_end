import React from 'react'
import './productList.css'
import {Item} from '../ProductItem/productitem.jsx'
import {Products} from '../../../ShopData/Store.jsx'


export const ProductList = () => {
	return(
		<div className="listContainer">
			{
				Products.map((item) => 
					<Item key = {item.id} title = {item.title} description = {item.description} price = {item.price} img = {item.img}/>
				)
			}
		</div>
		)
	}
