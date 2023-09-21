

import React from 'react'

export default function DefaultButton({ color, fontSize, text}) {
	if (text == undefined) {
		text = "Placeholder";
	}

	return (
		<>
		<button>{text}</button>
	
		<style jsx>
			{`
			button {
				background-color: var(--color-topographic-green);
				font-size: var(--font-size-body-L);
				padding: var(--padding-btn-default);
				color: #FFFFFF;
				font-family: var(--font-calps);
			}
			`}</style>
		</>
	)

	
}
