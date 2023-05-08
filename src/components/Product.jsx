import { useEffect, useState } from 'react';
import './Product.css'
import { ProductCard } from './ProductCard';
import { OrderCart } from './OrderCart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';

export const Product = () => {
	const [products,setProducts]=useState([])
const [cart,setCart]=useState([])
	


	useEffect(()=>{
		fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
		.then(res=>res.json())
		.then(data=>setProducts(data))
	},[]);
	// reloading products from local storage
	useEffect(()=>{
		const storedData=getShoppingCart()
		const savedCart=[];
		for(const id in storedData){
			const addedProduct=products.find(product=>product.id ===id);	
			if(addedProduct){
				const quantity=storedData[id]
			addedProduct.quantity = quantity
			savedCart.push(addedProduct)
		
			}
			
		}
		setCart(savedCart)
	},[products])
	const handleAddToCart=(product)=>{
    const newCart = [];
    const exist=cart.find(pd=>pd.id===product.id)
    if(!exist){
	product.quantity=1;
	newCart=[...cart,product]
    }
        setCart(newCart);
	addToDb(product.id)
	}
	
	return (
		<div className="product">
		<div className="product-section">
                                  {products.map(product=> <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}/>)}
			</div>
			<div className="order-section">
				
				<OrderCart cart={cart}/>
			</div>
		</div>
	);
}

