import Image from 'next/image'
import React from 'react'

export default function GalleryImage({ src, alt }) {
	return (
		<>
			<div className="container">
				<Image src={src} alt={alt} width={300} height={300} style={{ height: "100%", objectFit: "cover" }} />
			</div>


			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 308px;
					height: 308px;
					border: 8px solid white;
					box-shadow: var(--shadow-box-massive-card);
				}
			`}</style>
		</>
	)
}
