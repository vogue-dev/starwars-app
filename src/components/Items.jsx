import React from 'react';
import Item from './Item';

const Items = React.memo(function Items({ data }) {
	return data.map((eachPerson) => <Item eachPerson={eachPerson} key={eachPerson.id} />);
});

export default Items;
