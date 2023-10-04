import CardCarousel from "@/components/CardCarousel";
import DefaultButton from "@/components/DefaultButton";
import Section from "@/components/Section";
import TextInput from "@/components/TextInput";
import LargeCardMobile from "@/components/LargeCardMobile";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
	const [searchQuery, setSearchQuery] = useState([]); // the thing to search for
	const [searchReq, setSearchReq] = useState([]); // request for a search opperation

	const [eventStrapiData, setEventsStrapiData] = useState([]); // events
	const [attractionStrapiData, setAttractionStrapiData] = useState([]);
	const [businessStrapiData, setBusinessStrapiData] = useState([]);

	useEffect(() => {
		async function fetchStrapiData() {
			if (searchQuery == "") {
				console.log("No search query, load all")

				const eventResponse = await fetch('https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/events?populate=*')
				const eventData = await eventResponse.json()
				setEventsStrapiData(eventData.data)

				const attractionResponse = await fetch('https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/attrractions?populate=*')
				const attractionData = await attractionResponse.json()
				setAttractionStrapiData(attractionData.data)

				const businessResponse = await fetch('https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/businesses?populate=*')
				const businessData = await businessResponse.json()
				setBusinessStrapiData(businessData.data)
			}


			// console.log(eventStrapiData)
		}

		fetchStrapiData()
	}, [searchReq])


	/**
	 * {0: data...} ===> {0: attributes: {data...}}
	 * @param {*} oldArray 
	 * @returns 
	 */
	async function reMap(oldArray, variant) {
		if (oldArray.length <= 0) return undefined;

		// let newArray = [];

		let strapiQuery = ""

		// get strapi query, then search for all ids
		oldArray.map((item) => {
			strapiQuery += `&filters[id][$in]=${item.id}`;
		})
		// console.log(strapiQuery);

		/**
		 * Fetch data with images from strapi
		 * @returns 
		 */
		async function getImages() {
			const imagesPulled = await fetch(`https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/${variant}?populate=*${strapiQuery}`);
			const imageData = await imagesPulled.json();
			// console.log("Raw images")
			// console.log(imageData)


			// sort the data to ensure parity
			imageData.data.sort((a, b) => {
				return a.id > b.id ? 1 : -1;
			})

			return imageData.data;
		}

		let newData = await getImages();
		// console.log("New data")
		// console.log(newData)

		return newData;
	}

	useEffect(() => {
		async function fetchSearchResult() {
			// console.log("Searching for: " + searchQuery);

			// show all results if search is blank
			if (searchQuery[0] == undefined) {
				console.log("Blank search, showing all results")
				return;
			}

			const gotData = await fetch(`https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/fuzzy-search/search?query=${searchQuery}`);
			const searchData = await gotData.json();
			// console.log("got data")
			// console.log(searchData);

			// set the data
			setEventsStrapiData(await reMap(searchData.events, "events"));
			setBusinessStrapiData(await reMap(searchData.businesses, "businesses"));
			setAttractionStrapiData(await reMap(searchData.attrractions, "attractions"));
			setSearchReq(false); // end search request

			// console.log("ending data");
			// console.log(eventStrapiData);
			// console.log(attractionStrapiData);
			// console.log(businessStrapiData);
		}

		fetchSearchResult()
	}, [searchReq])


	/**
	 * Read from text input component
	 * @param {*} data 
	 */
	const readQuery = (data) => {
		// console.log("recieved")
		// console.log(data)
		setSearchQuery(data)
	}

	return (
		<>
			<style jsx>
				{`
           {
            /* heading, search bar, filter buttons */
          }

		  
          h1 {
            font-size: var(--font-size-header-M);
            font-weight: var(--font-weight-titles);
            font-family: var(--font-calps);
          }

          .topPart {
            display: flex;
            flex-direction: column;
            margin: auto;
            max-width: 1100px;
          }
          .searchBox {
            width: 100%;
          }
          .searchBoxWithIcon {
            display: flex;
			margin: 20px;
			box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
          }

		  .search-title{
			font-size: var(--font-size-header-M);
			margin: 0px 10px;
		  }

		  @media screen and (max-width: 639px) {
			.search-title{
				font-size: var(--font-size-header-S);
			}
		  }

          .filter-sort {
            align-self: end;
          }

           {
            /* Carousel */
          }
          .cardPlaceholder {
            width: 360px;
            height: 360px;
            background-color: grey;
          }

           {
            /* for card spacing */
          }
          li {
            margin: 20px;
          }
        `}
			</style>


			<Section marginTop="20px">
				<h1 className="search-title">Search Events & Attractions</h1>
				<div className="topPart">
					<div className="searchBoxWithIcon" >
						<DefaultButton onClick={() => { setSearchReq(true) }}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</DefaultButton>

						<div className="searchBox">
							<TextInput placeholder={"Search"} width={`100%`} dataOut={readQuery}></TextInput>
						</div>
					</div>
					<div className="filter-sort">
						<DefaultButton className="filter-sort-btn">Filter</DefaultButton>
						<DefaultButton className="filter-sort-btn">Sort</DefaultButton>
					</div>
				</div>
			</Section>

			<Section marginBottom="40px">
				<CardCarousel title="Events" margin="0px 0px 40px 0px">

					{eventStrapiData?.map((card, index) => (
						<li key={index}>
							<LargeCardMobile
								title={card.attributes.title}
								imgSrc={card.attributes.image.data.attributes.url}
								address={card.attributes.location}
								category={card.attributes.tags}
								description={card.attributes?.richTextDescription}
								rating={card.attributes?.numStars} isTicket={card.attributes?.isTicket}
								ticketDate={card.attributes.date} timeStart={card.attributes.startTime}
								timeEnd={card.attributes.endTime}>
							</LargeCardMobile>
						</li>
					))}

				</CardCarousel>
				<hr />
				<CardCarousel title="Attractions" margin="40px 0px 40px 0px">

					{attractionStrapiData?.map((card, index) => (
						<li key={index}>
							<LargeCardMobile
								title={card.attributes.title}
								imgSrc={card.attributes.image.data.attributes.url}
								address={card.attributes.location}
								category={card.attributes.tags}
								description={card.attributes?.richTextDescription}
								rating={card.attributes?.numStars} isTicket={card.attributes?.isTicket}
								ticketDate={card.attributes.date} timeStart={card.attributes.startTime}
								timeEnd={card.attributes.endTime}>
							</LargeCardMobile>
						</li>
					))}

				</CardCarousel>
				<hr />

				<CardCarousel title="Business" margin="40px 0px 40px 0px">

					{businessStrapiData?.map((card, index) => (
						<li key={index}>
							<LargeCardMobile
								title={card.attributes.title}
								imgSrc={card.attributes.image.data.attributes.url}
								address={card.attributes.location}
								category={card.attributes.tags}
								description={card.attributes?.richTextDescription}
								rating={card.attributes?.numStars} isTicket={card.attributes?.isTicket}
								ticketDate={card.attributes.date} timeStart={card.attributes.startTime}
								timeEnd={card.attributes.endTime}>
							</LargeCardMobile>
						</li>
					))}

				</CardCarousel>
			</Section>

		</>
	);
}
