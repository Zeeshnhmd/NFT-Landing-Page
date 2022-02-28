import React from 'react';
import superEth from '../assets/supereth.png';
const Card = (props) => {
	return (
		<div className="card">
			<div className="card-image">
				<img src={props.image} alt="super" />
			</div>
			<div className="card-content">
				<div className="card-heading">
					<span className="card-series">{props.series}</span>
					<span className="card-top">Top BID</span>
				</div>
				<div className="card-details">
					<h4 className="card-title">{props.title}</h4>
					<div className="card-price">
						<img src={superEth} alt="super eth" />
						<h4>{props.price} ETH</h4>
					</div>
				</div>
				<div className="card-sub-details">
					<span>#{props.tag}</span>
					<span>{props.time} day left</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
