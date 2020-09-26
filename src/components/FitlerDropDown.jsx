import React, { useEffect, useRef } from 'react';

const FitlerDropDown = React.memo(function FitlerDropDown({
	data,
	isDroppedDown,
	setDropDownClose,
	onClickDropDownFilter,
}) {
	const sortRef = useRef();

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
	});

	const handleOutsideClick = (e) => {
		let path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
		if (!path.includes(sortRef.current)) {
			setDropDownClose(true);
		}
	};

	return isDroppedDown ? (
		<div className="filter__dropped__down" ref={sortRef}>
			<ul>
				{data.map((eachPerson) => (
					<li key={eachPerson.id} onClick={() => onClickDropDownFilter(eachPerson.name, true)}>
						{eachPerson.name}
					</li>
				))}
			</ul>
		</div>
	) : (
		''
	);
});

export default FitlerDropDown;
