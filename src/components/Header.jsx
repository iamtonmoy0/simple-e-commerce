import './Header.css';
import logo from '../images/Logo.svg'
export const Header = () => {
	return (
		<div className='nav'>
			<img src={logo} alt="" />
			<div className="link">
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">Shop</a>
				<a href="">Contact</a>
			</div>
		</div>
	);
}

