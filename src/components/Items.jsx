import React from 'react';
// import Item from './Item';

// export default function Items() {
// 	return (
// 		<div className="items row">
// 			<Item
// 				img="https://i.pinimg.com/236x/7f/28/f5/7f28f596cf6921ef3ef048f79c727866.jpg"
// 				text="FIRST ITEM"
// 			/>
// 		</div>
// 	);
// }

export default function Items({ data }) {
	return data.allFilms.films.map((eachFilm) => (
		<div className="item col-sm-12 col-md-6 col-lg-4" key={eachFilm.id}>
			<img
				src="https://i.pinimg.com/236x/7f/28/f5/7f28f596cf6921ef3ef048f79c727866.jpg"
				alt=""></img>
			<div>
				<b>{eachFilm.title}</b>
			</div>
		</div>
	));
}
