import React from 'react'

export default function Gallery() {
	return (
		<>
			<div className="container">
				<div style={{ width: "300px", height: "800px", background: "red" }}>

				</div>

				<div style={{ width: "300px", height: "300px", background: "red" }}>

				</div>

				<div style={{ width: "300px", height: "300px", background: "red" }}>

				</div>
			</div>

			<style jsx>{`
				.container {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					width: 100%;
					gap: 128px;
				}
			`}</style>
		</>
	)
}
