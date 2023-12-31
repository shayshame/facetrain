import React from 'react';

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className='white f3'>
				{`${name}, your entry count `}
			</div>
			<div className='white f1'>
				{entries.entries}
			</div>
		</div>
	);
}

export default Rank;