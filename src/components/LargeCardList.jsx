import React from 'react'

export default function LargeCardList({children}) {
	return (
		<>
			<div className="card-container">
				{children}
			</div>

			<style jsx>
				{`
				.card-container {
					display: flex;
					flex-direction: column;
					align-items: stretch;
					gap: 50px;
					padding-bottom: 50px;
					padding-top: 20px;
				}
				`}
			</style>
		</>
	)
}