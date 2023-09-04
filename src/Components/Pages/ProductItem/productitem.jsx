import React, {useState}from 'react'
import './productitem.css'



export const Item = (props) => {

	const [click,setClick] = useState(1)


	const onBy = () => {
		setClick(click + 1)
		props.editPrice(props.price, props.id)
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


				<div className = {'img'}>
					<button type = 'button' className = {'btn'} onClick = {onBy}><img className = {'img'} src = {props.img} alt = "vot" /></button>
				</div>

				<div className = {'Basket'}>
					<p>In Your basket:{click}</p>
					<p>Full price:{props.price}</p>
					<p>id:{props.id}</p>
				</div>

			</div>
				
		</div>
		)
}
