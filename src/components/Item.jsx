import React from 'react';

const Item = React.memo(function Item({ eachPerson }) {
	let gender = eachPerson.gender;

	let imgSrc = '';
	let maleImg = 'http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Luke-Skywalker.png';
	let femaleImg =
		'http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Princess-Leia.png';
	let naImg = 'http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-R2D2.png';
	let hermaphroditeImg =
		'https://i.pinimg.com/originals/13/a9/20/13a9203c8ade09e700bbb4dc753014b2.png';

	if (gender === 'male') {
		imgSrc = maleImg;
	} else if (gender === 'female') {
		imgSrc = femaleImg;
	} else if (gender === 'n/a') {
		imgSrc = naImg;
	} else if (gender === 'hermaphrodite') {
		imgSrc = hermaphroditeImg;
	}

	return (
		<div className="item col-sm-12 col-md-6 col-lg-4" key={eachPerson.id}>
			<img src={imgSrc} alt="male-img"></img>

			<div>
				<b>{eachPerson.name}</b>
			</div>
		</div>
	);
});

export default Item;
