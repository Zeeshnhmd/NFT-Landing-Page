import React from 'react';
import eth1 from '../assets/eth1.png';
import eth2 from '../assets/eth2.png';
const likes = [
	{
		image: eth1,
		h2: ' AN NFT like no other',
		p1: 'Dont miss out on the release of our new NFT. Sign up below to receive updates when we go live on 11/22.',
		p2: 'Dont miss out on the release of our new NFT. Sign up below to receive updates when we go live on 11/22.Dont miss out on the release of our new NFT.  ',
	},
	{
		image: eth2,
		h2: ' AN NFT like no other',
		p1: 'Dont miss out on the release of our new NFT. Sign up below to receive updates when we go live on 11/22.',
		p2: 'Dont miss out on the release of our new NFT. Sign up below to receive updates when we go live on 11/22.Dont miss out on the release of our new NFT.  ',
	},
];
const Like = () => {
	return (
		<div className="like">
			<div className="container">
				{likes.map((like, index) => {
					return (
						<div className="content" key={index}>
							<div className="image">
								<img src={like.image} alt="eth" />
							</div>
							<h2 className="title">{like.h2}</h2>
							<p className="description">{like.p1}</p>
							<p className="description">{like.p2}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Like;
