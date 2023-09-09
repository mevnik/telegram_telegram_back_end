import React, {useState, useEffect, useCallback} from 'react'
import './productList.css'
import {Item} from '../ProductItem/productitem.jsx'
import {Products} from '../../../ShopData/Store.jsx'
import {useTelegram} from '../../../Hooks/useTelegram.jsx'
import {Basket} from '../../Basket/basket.jsx'





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


    

    /*

	useEffect(() => {
		if(!name || !email) tg.MainButton.hide()
	    else tg.MainButton.show()
	        
	    }, [name,email,tg.MainButton])

	    */

	const[all_price, setAll_price] = useState(0)
	const[basket, setBasket] = useState([])
	const[show_basket, setShow_basket] = useState(false)

			let basket_buf

	const editBasket = (click,product_id) => {
			if(all_price === 0) onToggleButton()
			basket_buf = basket.filter( (item) => item.product_id!== product_id)
			basket_buf.push({product_id,click})
			setBasket(basket_buf)
			setAll_price(all_price + Products.find( (item) => item.id === product_id).product.price)
			if(click>3) setShow_basket(true)

	}
/*
	useEffect(() => {
		editBasket()
	},[basket])
*/
	const goBasket = () => {
		setShow_basket(true)

	}

	const goBack = () => {
		setShow_basket(false)
	}

	const editPurchase = (product_id, click) => {
		const buf = basket
		const item_to_edit = buf.find( (item) => item.id === product_id)
		const index_item_to_edit = buf.indexOf(item_to_edit)
		buf.splice(index_item_to_edit,1)
		buf.push({product_id,click})
		setBasket(buf)
		editBasket(click,product_id)


	}

	useEffect(() => {
    	tg.onEvent('mainButtonClicked', goBasket)
    	return () => {
    		tg.offEvent('mainButtonClicked', goBasket)
    	}
        
    },[tg],goBasket)

	if(!show_basket)
		return(

				<div className="listContainer">
					<div className="shop">

						{
								Products.map((item) => 
									<Item key = {item.id} 
									id = {item.id}
									title = {item.product.title} 
									description = {item.product.description}
									 price = {item.product.price} 
									 img = {item.product.img}
									 basket = {basket}
									 editBasket = {editBasket}
									 />
							)
						}
					</div>
					<div className = {'sum'}>Sum in basket:{all_price}$ lenth:{basket.length}</div>
				</div>

			)
		
				

		return (
			<div className="listContainer">
				<div className="shop">
					<Basket basket = {basket} onClick = {goBack} onEdit = {editPurchase}/>
				</div>
			</div>
			)

	}
