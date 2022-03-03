import React from 'react';
import super1 from '../assets/super1.png';
import super2 from '../assets/super2.png';
import super3 from '../assets/super3.png';
import super4 from '../assets/super4.png';
import Card from './Card';
const SuperRare = () => {
	const data = [
		{
			image: super1,
			series: 'Gloop Series',
			title: 'Purple Man',
			price: 2.99,
			tag: 1298,
			time: 1,
		},
		{
			image: super2,
			series: 'Gloop Series',
			title: 'Purple Man',
			price: 2.99,
			tag: 1298,
			time: 1,
		},
		{
			image: super3,
			series: 'Gloop Series',
			title: 'Purple Man',
			price: 2.99,
			tag: 1298,
			time: 1,
		},
		{
			image: super4,
			series: 'Gloop Series',
			title: 'Purple Man',
			price: 2.99,
			tag: 1298,
			time: 1,
		},
	];
	return (
		<div className="super-rare">
			<div className="title-container">
				<h2 className="title">LE Super Rare Auction</h2>
				<p className="description">
					We have released four limited edition NFT's early which can be bid on
					via <a href="/">OpenSea.</a>
				</p>
			</div>
			<div className="cards">
				{data.map((superRare, index) => (
					<Card
						image={superRare.image}
						series={superRare.series}
						title={superRare.title}
						price={superRare.price}
						tag={superRare.tag}
						time={superRare.time}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default SuperRare;
