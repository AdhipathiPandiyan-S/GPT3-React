import './Navbar.css';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => {
	return (
		<React.Fragment>
			<p>
				<a href="#home">Home</a>
			</p>
			<p>
				<a href="#wgpt3">What is GPT3</a>
			</p>

			<p>
				<a href="#features">Case Studies</a>
			</p>
			<p>
				<a href="#possibility">OpenAI</a>
			</p>
			<p>
				<a href="#blog">Library</a>
			</p>
		</React.Fragment>
	);
};

const Navbar = () => {
	const [ toggleMenu, setToggleMenu ] = useState(false);

	return (
		<div className="gpt3__navbar">
			<div className="gpt__navbar-links">
				<div className="gpt3__navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="gpt3__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="gpt3__navbar-sign">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>
			<div className="gpt3__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine color="#FFF" size={27} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line color="#FFF" size={27} onClick={() => setToggleMenu(true)} />
				)}

				{toggleMenu && (
					<div className="gpt3__navbar-menu_container scale-up-center">
						<div className="gpt3__navbar-menu_container-links">
							<Menu />
							<div className="gpt3__navbar-menu_container-links-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
