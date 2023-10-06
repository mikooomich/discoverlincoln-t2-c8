import React from 'react'

import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import DefaultButton from './DefaultButton'


export default function MapCard({ strapiDataLink, itemSelector, children }) {

	return (
		<>
			<div className="map-card">
				{/* {children} */}
				<div className='map'>
					<MapContainer center={[43.155, -79.483]} zoom={12} scrollWheelZoom={true} style={{ backgroundColor: "#d9d9d9", width: "100%", height: "400px", overflow: "hidden" }}>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{
							strapiDataLink?.map((pin, index) => {
								console.log(pin)
								if (pin.attributes.latitude != undefined && pin.attributes.longitude != undefined) {
									return (
										<Marker position={[pin.attributes.latitude, pin.attributes.longitude]}>
											<DefaultButton onClick={() => { itemSelector(pin.id) }}>
												<Popup>
													<img src={pin.attributes.image.data.attributes.url} ></img>
													{pin.attributes.title}
												</Popup>
											</DefaultButton>
										</Marker>
									)
								}
							}
							)}

					</MapContainer>
				</div>
				<div className='children'>
					{children}
				</div>
			</div>

			<style jsx>{`
				.map-card {
					display: flex;
					box-shadow: var(--shadow-box-massive-card);
				}

				.map {
					width: 100%;
				}

				.children {
					margin-left: 5px;
				}

				@media screen and (max-width: 800px) {
					.map-card {
						flex-direction: column;
					}

					.children {
						align-self: center;
					}
				}

			`}</style>
		</>
	)
}