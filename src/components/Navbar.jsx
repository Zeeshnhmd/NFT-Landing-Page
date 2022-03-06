import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import logo from '../assets/logo.png';

const Navbar = ({ changeTheme, currentTheme }) => {
	// const [navState, setNavState] = useState(false);
	return (
		<nav>
			<div className="brand-container">
				<div className="brand">
					<img src={logo} alt="logo" />
				</div>
				<div className="toggle-container">
					<div className="toggle"></div>
					<div className="mode">
						{currentTheme === 'dark' ? (
							<MdClose className="light" />
						) : (
							<BsFillMoonFill className="dark" />
						)}
					</div>
				</div>
			</div>
			<div className="links-container">
				<ul className="links">
					<li>
						<a href="/">Features</a>
					</li>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Launch</a>
					</li>
					<li>
						<a href="/">Sign Up</a>
					</li>
					<li onClick={changeTheme}>
						{currentTheme === 'dark' ? (
							<BsFillSunFill className="light" />
						) : (
							<BsFillMoonFill className="dark" />
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
