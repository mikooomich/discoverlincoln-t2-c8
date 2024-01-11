import EventAttractionTemplate from "@/components/EventAttractionTemplate";
import React from "react";
import { useEffect, useState } from 'react'
import { SERVER_URL } from "./index";

export default function attractions() {
	const [strapiData, setStrapiData] = useState();

	useEffect(() => {
		async function fetchStrapiData() {
			const response = await fetch(`${SERVER_URL}/api/attractions`)
			const data = await response.json()
			setStrapiData(data)
		}

		fetchStrapiData()
	}, [])

	return (
		<>
			<EventAttractionTemplate variant="attractions" strapiDataLink= {strapiData} strapiDataLinkSetter={setStrapiData}></EventAttractionTemplate>
		</>
	);
}
