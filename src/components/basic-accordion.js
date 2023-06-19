import React, { useState } from 'react';

export const BasicAccordion = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);

    const title = arrayOfChildren[0]
    const content=arrayOfChildren[1]

	const [ expanded, setExpanded ] = useState(false);

	return (
		<div className="expandable">
			<div>
				<div
					onClick={() => {
						setExpanded(!expanded)
					}}
					role="presentation"
				>
    				{title}
				</div>
				{expanded && <div className="content">{content}</div>}
			</div>
		</div>
	);
};
