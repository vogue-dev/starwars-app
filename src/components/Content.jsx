import React from 'react';
import Items from './Items';

const Content = React.memo(function Content(params) {
	return (
		<section className="col-9">
			<div className="items row">
				{params.loading ? 'Loading...' : <Items data={params.data} />}
			</div>
		</section>
	);
});

export default Content;
