import React, {useState, useEffect, useCallback} from 'react'
import './productList.css'
import {Item} from '../ProductItem/productitem.jsx'
import {Products} from '../../../ShopData/Store.jsx'
import Button from '../../Button/button.jsx';
import {useTelegram} from '../../../Hooks/useTelegram.jsx'





export const ProductList = () => {

	const {tg, onToggleButton} = useTelegram()

    const onSendData = useCallback(() => {
    	console.log('vot')
    },[])

	useEffect(() => {
    	tg.MainButton.setParams({
    		text: 'go to basket'
    	})
        
    })


 	useEffect(() => {
    	tg.onEvent('mainButtonClicked', onSendData)
    	return () => {
    		tg.offEvent('mainButtonClicked', onSendData)
    	}
        
    },[tg,onSendData])


    const toBasket = () => {
    	tg.MainButton.show()
    }

    /*

	useEffect(() => {
		if(!name || !email) tg.MainButton.hide()
	    else tg.MainButton.show()
	        
	    }, [name,email,tg.MainButton])

	    */

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
				<Button onClick={onToggleButton} text = 'Go to basket'/>

			</div>

		)
	}
