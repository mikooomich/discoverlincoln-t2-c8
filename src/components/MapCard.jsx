import React from 'react'


export default function MapCard({children}) {
	return (
		<>
			<div className="map-container">
				{children}
			</div>

			<style jsx>{`
				.map-container {
					display: flex;
					flex-direction: column;

					width: 100%;
					margin-bottom: 50px;

					{/* background-color: #a83434; */}
					box-shadow: var(--shadow-box-massive-card);
				}
			`}</style>
		</>
	)
}