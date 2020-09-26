import React from 'react';
import Item from './Item';

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

const Items = React.memo(function Items({ data }) {
	return data.map((eachPerson) => <Item eachPerson={eachPerson} />);
});

export default Items;
