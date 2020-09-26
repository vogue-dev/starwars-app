import React, { useEffect, useRef } from 'react';

const FitlerDropDown = React.memo(function FitlerDropDown(params) {
	const sortRef = useRef();

	// close dropdown window by clicking on missing area

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
	});

	const handleOutsideClick = (e) => {
		let path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
		if (!path.includes(sortRef.current)) {
			params.setDropDownClose(true);
		}
	};

	return params.isDroppedDown ? (
		<div className="filter__dropped__down" ref={sortRef}>
			<ul>
				{params.data.map((eachPerson) => (
					<li
						key={eachPerson.id}
						onClick={() => params.onClickDropDownFilter(eachPerson.name, true)}>
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
