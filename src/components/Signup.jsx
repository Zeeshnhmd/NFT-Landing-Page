import React from 'react';
import signup from '../assets/signup.png';
const Home = () => {
	return (
		<div className="signup">
			<div className="container">
				<div className="content">
					<p className="sub-title">Launching Soon</p>
					<h1 className="title">An NFT like no other</h1>
					<p className="description">
						Don't miss out on the release of out new NFT. Sign Up below to
						receive updates when we go Live.
					</p>
					<button>SignUp</button>
				</div>
				<div className="image-container">
					<div className="image">
						<img src={signup} alt="home" />
					</div>
					<div className="ellipse-container">
						<div className="ellipse pink"></div>
						<div className="ellipse orange"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
