import React from 'react'
import './productitem.css'



export const Item = (props) => {

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
					<p>{props.price}</p>
				</div>


				<div className = {'img'}>
					<img className = {'img'} src = {props.img} alt = "vot"/>
				</div>
			</div>
				
		</div>
		)
}