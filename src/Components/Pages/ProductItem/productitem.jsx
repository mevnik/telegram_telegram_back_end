import React, {useState}from 'react'
import './productitem.css'



export const Item = (props) => {
	const count = props.basket.find( (item) => item.product_id === props.id)?props.basket.find( (item) => item.product_id === props.id).click : 0

	const [click,setClick] = useState(count)


	const onBy = () => {
		setClick(click + 1)
		props.editBasket(click + 1, props.id)
	}


	return (
		<div className = {'Container'}>
			<div className = {'Item'}>
				<div className = {'title'}>
					<p>{props.title}</p>
				</div>


				<div className = {'description'}>
					<p>{props.description}</p>
				</div>


				<div className = {'Price'}>
					<p>Price:{props.price}$</p>
				</div>


				<div className = {'img_item'}>
					<button type = 'button' className = {'btn'} onClick = {onBy}><img className = {'img_item'} src = {props.img} alt = "vot" /></button>
				</div>

				<div className = {'Basket'}>
					<p>In Your basket:{click}</p>
					<p>Full price:{props.price}</p>
					<p>id:{props.id}</p>
					<p>count in basket:{count}</p>
				</div>

			</div>
				
		</div>
		)
}
