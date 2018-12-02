import React from 'react';

const EditExpensePage = (props) => {
	return (
		<div>
		{console.log(props)};
		<p>{props.match.params.id}</p>
		</div>
		);
}

export default EditExpensePage;