import React from 'react';
import './pages.css';
import {ProductList} from './ProductList/productList.jsx'

export function MainPage(props){
	return(
		<div className = {'pagesContainer'}>
	<div>Main</div>
			<ProductList/>
		</div>
		)
}