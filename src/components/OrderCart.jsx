import './OrderCart.css'
export const OrderCart = ({cart}) => {
	let total=0;
	let shipping=0;
	for(const product of  cart){
		total += product.price;
		shipping+=product.shipping
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

