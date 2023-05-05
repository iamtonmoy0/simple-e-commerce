import { useEffect, useState } from 'react';
import './Product.css'

export const Product = () => {
	const [products,setProducts]=useState([])
	useEffect(()=>{
		fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
		.then(res=>res.json())
		.then(data=>setProducts(data))
	},[])
	return (
		<div className="product">
			<div className="product-section">
                          <h3>Total {products.length} Products Available</h3>
 
			</div>
			<div className="order-section">
				<h3>Order Summery</h3>
			</div>
		</div>
	);
}

