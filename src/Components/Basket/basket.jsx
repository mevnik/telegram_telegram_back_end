import React, {useState, useCallback, useEffect} from 'react'
import {Purchase} from './purchase'
import Button from '../Button/button.jsx'
import './basket.css'
import {useTelegram} from '../../Hooks/useTelegram.jsx'



export const Basket = (props) => {
const[id,setId] = useState(0)

const onClick = (id,count) => {
	setId(count)
	props.onEdit(id,count)


}
	const {tg} = useTelegram()


const onSend = () => {
        const data = {
          all_price: "555",
          query_id: "34",
          name: "jon"
        }

        fetch('http://159.253.18.191:8000/web-api',{
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(data)
        })
}


const onSendData = useCallback(() => {
setId(5)
		const data = {
			name: "try send info"
		}
//		tg.MainButton.hide()
		tg.sendData(JSON.stringify(data))
	},[tg])


    useEffect(() => {
    	tg.MainButton.setParams({
    		text: 'Buy!'
    	})
	    tg.MainButton.show()
        
    },[tg])

	return (
		<div className = {'container_basket'}>
		<div className = {'title_basket'}>
			
			<p>In Your basket{id}</p>
			<Button onClick={props.onClick} text = 'back to shop'/>

		</div>

			{props.basket.map((product) =>

			<Purchase key = {product.id} product = {product} onClick = {onClick}/>

			)}
			<div className = {'bottom_basket'}>
				<Button onClick={onSend} text = 'buy'/>
		</div>





		</div>

		)
}