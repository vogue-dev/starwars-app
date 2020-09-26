import React from 'react';

const Item = React.memo(function Item({ eachPerson }) {
	let gender = eachPerson.gender;

	let imgSrc = '';
	let maleImg = './img/male.png';
	let femaleImg = './img/female.png';
	let naImg = './img/na.png';
	let hermaphroditeImg = './img/hermaphrodite.png';
	let noneImg = './img/none.jpg';

	if (gender === 'male') {
		imgSrc = maleImg;
	} else if (gender === 'female') {
		imgSrc = femaleImg;
	} else if (gender === 'n/a') {
		imgSrc = naImg;
	} else if (gender === 'hermaphrodite') {
		imgSrc = hermaphroditeImg;
	} else imgSrc = noneImg;

	return (
		<div className="item col-sm-12 col-md-6 col-lg-4">
			<img src={imgSrc} alt=""></img>

			<div>
				<div>
					<b>{eachPerson.name}</b>
				</div>
				<div>Gender: {eachPerson.gender}</div>
				<div>Height: {eachPerson.height} sm</div>
			</div>
		</div>
	);
});

export default Item;
