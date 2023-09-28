import React, { useEffect, useState } from 'react'

export default function StrapiExample() {
	const [strapiData, setStrapiData] = useState([])

	useEffect(() => {
		async function fetchStrapiData() {
			const response = await fetch('https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/events')
			const data = await response.json()

			setStrapiData(data.data)
		}

		fetchStrapiData()
	}, [])

	return (
		<>
			{strapiData[0] !== undefined &&
				<p>{strapiData[0].attributes.title}</p>

			}
		</>

	)
}
