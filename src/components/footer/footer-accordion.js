// from https://thewebdev.info/2021/01/31/create-an-accordion-component-with-react-and-javascript/

import React, { useState } from 'react';

export const FooterAccordion = ({ children }) => {
	const arrayOfChildren = React.Children.toArray(children);

	const contentArray = [];
	for (let i = 0; i < arrayOfChildren.length; i += 2) {
		const elem = {};
		elem.title = arrayOfChildren[i];
		elem.content = arrayOfChildren[i + 1];
		contentArray.push(elem);
	}

	const [ contents, setContents ] = useState(contentArray);

	return (
		<div className="expandable">
			<style>
				{`
          .title {
            margin-top: 20px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #202529;
            padding: 5px;
          }

          .content {
            padding: 5px;
          }
        `}
			</style>
			{contents.map((c, i) => {
				return (
					<div key={c.title.key}>
						<div
							className="title"
							onClick={() => {
								const c = [ ...contents ];
								c[i].expanded = !c[i].expanded;
								setContents(c);
							}}
                            role="presentation"
						>
							<div>
								<b>{c.title}</b>
							</div>
							<div>{c.expanded ? <span>&#x2212;</span> : <span>&#x2b;</span>}</div>
						</div>
						{c.expanded && <div className="content">{c.content}</div>}
					</div>
				);
			})}
		</div>
	);
};
