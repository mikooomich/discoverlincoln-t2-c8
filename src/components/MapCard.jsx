import React from 'react'

import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


export default function MapCard({ children }) {

	return (
		<>
			<div className="map-container">
				{/* {children} */}
				<MapContainer center={[51.505, -0.09]} zoom={10} scrollWheelZoom={true} style={{backgroundColor: "#d9d9d9", width: "100%", height: "400px", overflow: "hidden"}}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					 /> 
					<Marker position={[51.505, -0.09]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
					<Marker position={[51.305, -0.09]}>
						<Popup>
							MEOW
						</Popup>
					</Marker>
				</MapContainer>
			</div>

			<style jsx>{`
				.map-container {
					width: 100%;
					margin-bottom: 50px;

					{/* background-color: #a83434; */}
					box-shadow: var(--shadow-box-massive-card);
				}
			`}</style>
		</>
	)
}