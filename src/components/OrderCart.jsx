import './OrderCart.css'
import { Product } from './Product';
export const OrderCart = ({cart}) => {
	let total=0;
	let shipping=0;
	let quantity=0;
	for(const product of  cart){
		// if(product.quantity == 0){
		// 	product.quantity=1
		// }
		total += product.price * quantity;
		shipping+=product.shipping
		quantity+=product.quantity
	}
	const tax = total*7/100;
	const grandTotal=total+shipping+tax;

		return (
		<div className='cart-info'>
<h3>Order Summery</h3>
			<p>{cart.length} Item added</p>
			<p>Total Price : {total} $ </p>
			<p>Total Shipping : {shipping} $</p>
			<p>Tax : {tax} $</p>
			<p>Grand Total : {grandTotal.toFixed(2)} $</p>
		</div>
	);
}

