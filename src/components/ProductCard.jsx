import './ProductCard.css'
import { handleAddToCart } from '../utilities/fakedb';
export const ProductCard = (product) => {
	
	const{name,img,price,ratings}=product.product;
	

	return (
		<div className='product-card'>
		<img src={img} alt="" />
		<h3>{name}</h3>
		
		<p>Price : {price}$</p>
		<p>Ratings : {ratings} Star</p>

		<button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
			
			
		</div>
	);
}


