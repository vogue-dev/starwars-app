import React from 'react';
import Items from './Items';

export default function Content(params) {
	return (
		<section className="col-9">
			<div className="items row">
				{params.loading ? 'Loading...' : <Items data={params.data} />}
			</div>
		</section>
	);
}
