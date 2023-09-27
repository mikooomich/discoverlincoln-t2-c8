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
export default function DefaultButton({
	isLink = false,
	bgColor = "var(--color-topographic-green)",
	textColor = "#FFFFFF",
	fontSize = "var(--font-size-body-L)",
	padding = "var(--padding-btn-default)",
	className = "",
	href = "",
	children }) {
	return (
		<>
			{isLink &&
				<a href={href} className={className}>{children}</a>}
			{!isLink &&
				<button className={className}>{children}</button>}


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



			{/* style classes for various buttons */}

			{/* login page */}
			.signBtn {
				background-color: var(--color-elevated-green);
				color: white;
				box-shadow: var(--shadow-box-buttons);
				border-radius: var(--border-radius-pill);
			
				padding: var(--padding-btn-default);
				min-width: 150px;
				font-size: var(-font-size-body-L);
				font-weight: bold;
				margin: 15px 0px;
			}

			.signBtn:hover {
                        	filter: brightness(70%);
                	}



			.dismissBtn {
				padding: 0px 16px;
				text-align: center;
				background-color: #f00;
				font-weight:bolder;
				font-size: var(--font-size-body-M);
				border-radius: 0px 0px 10px 10px;
				
				margin-right: 10px;
				align-self: start;
				position: sticky;
			}

			.dismissBtn:hover {
				filter: brightness(70%);
			}


			{/* Nav bar */}
			.mobileNav {
				background-color: transparent;
				color: white;

				font-size: 27px;
				font-family: var(--font-calps);
				font-weight: bold;
				
				display: flex;
				width:100vw;
				border: none;
				padding: 12px 20px;
			}

			.mobileNav:hover {
				background-color: #004527;
				{/* font-size: 28px; */}
			}

			{/* search page */}
			.filter-sort-btn {
				margin: 10px;
			}

			
	
		`}</style>
		</>
	)
}
