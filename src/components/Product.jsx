import { useEffect, useState } from 'react';
import './Product.css'
import { ProductCard } from './ProductCard';

export const Product = () => {
	const [products,setProducts]=useState([])
	useEffect(()=>{
		fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
		.then(res=>res.json())
		.then(data=>setProducts(data))
	},[]);
	
	return (
		<div className="product">
		<div className="product-section">
                                  {products.map(product=> <ProductCard key={product.id} product={product} />)}
			</div>
			<div className="order-section">
				<h3>Order Summery</h3>
			</div>
		</div>
	);
}

