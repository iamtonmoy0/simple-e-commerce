import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export const ProductCard = (props) => {
	const{name,img,price,ratings}=props.product;
	const handleAddToCart = props.handleAddToCart;


	return (
		<div className='product-card'>
		<img src={img} alt="" />
		<h3>{name}</h3>
		
		<p>Price : {price}$</p>
		<p>Ratings : {ratings} Star</p>

		<button onClick={()=>handleAddToCart(props.product)}>Add To Cart
		<FontAwesomeIcon icon={faCartShopping} />
		</button>
			
			
		</div>
	);
}


