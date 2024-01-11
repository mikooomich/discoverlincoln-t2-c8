import EventAttractionTemplate from "@/components/EventAttractionTemplate";
import React from "react";
import { useEffect, useState } from 'react'
import { SERVER_URL } from "./index";
export default function events() {
	const [strapiData, setStrapiData] = useState();

	useEffect(() => {
		async function fetchStrapiData() {
			const response = await fetch(`${SERVER_URL}/api/events`)
			const data = await response.json()
			setStrapiData(data)
		}

		fetchStrapiData()
	}, [])

	// console.log(strapiData)

	return (
		<>
			<EventAttractionTemplate variant={"events"} strapiDataLink={strapiData} strapiDataLinkSetter={setStrapiData}></EventAttractionTemplate>
		</>
	);
}
