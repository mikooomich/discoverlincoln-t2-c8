import React from 'react'

/**
 * Defaults:
 * text colour = white
 * background colour = --color-topographic-green
 * font size = --font-size-body-L
 * padding = --padding-btn-default
 * 
 * @param {*} param0 
 * @returns 
 */
export default function DefaultButton({isLink = false, bgColor = "var(--color-topographic-green)", 
textColor = "#FFFFFF", fontSize = "var(--font-size-body-L)", padding = "var(--padding-btn-default)", className = "", href = "", children}) {
	return (
		<>
		{isLink && <a href= {href} className={className}>{children}</a>}
		{!isLink && <button className={className}>{children}</button>}
		
		
		<style jsx>
			{`
			button {
				background-color: ${bgColor};
				font-size: ${fontSize};
				padding: ${padding};
				color: ${textColor};
				font-family: var(--font-calps);
			}

			a {
				{/* TODO: Style the links */}
			}
		`}</style>
		</>
	)
}
