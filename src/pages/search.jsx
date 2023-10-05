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
	const [sortFlags, setSortFlags] = useState(["title", "des"]);
	const [reloadLocalCards, setReloadLocalCards] = useState([]); // request for a reload of local cards
	const [allTags, setAllTags] = useState([]); // all tags avalible at the current moment
	const [selectedTags, setSelectedTags] = useState([]); // all tags the user has selected


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
	 * Search and sort functions
	 */

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
		// console.log(oldArray);

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
			setAttractionStrapiData(await reMap(searchData.attrractions, "attrractions"));
			setSearchReq(false); // end search request

			// console.log("ending data");
			// console.log(eventStrapiData);
			// console.log(attractionStrapiData);
			// console.log(businessStrapiData);
		}

		fetchSearchResult()
	}, [searchReq, reloadLocalCards])




	/**
	 * Filter and sort functions
	 */


	/**
	 * Sort the data an all three strapi datas
	 *
	 * @param {Array} variant which data array to sort
	 * @param {String} sortType sort by date or title
	 * @param {String} sortDirection sort by ascending (asc) or descending (des)
	 */
	function doSort(variant, variantSetter, sortType, sortDirection) {
		sortType = sortFlags[0];
		sortDirection = sortFlags[1];
		// console.log("sorting..." + sortType + sortDirection);

		let sortedArr;

		// sort by type
		if (sortType == "id") {
			// console.log("sorting by id")
			sortedArr = variant.sort((a, b) => {
				return a.id > b.id ? 1 : -1;
			})
		}

		else if (sortType == "date") {
			// console.log("sorting by date")
			sortedArr = variant.sort((a, b) => {
				let first = new Date(a.attributes.date).getTime();
				let second = new Date(b.attributes.date).getTime();

				// i think this is required for insitu
				if (first == second) return 0;
				else if (first > second) return 1;
				else return -1;
			})
		}
		else {
			// console.log("sorting by title")
			sortedArr = variant.sort((a, b) => {
				return a.attributes.title > b.attributes.title ? 1 : -1;
			})

		}

		// // reverse results if requested
		if (sortDirection == "des") {
			sortedArr = sortedArr.reverse();
		}

		variantSetter(sortedArr);
		setReloadLocalCards(!reloadLocalCards);
	}


	/**
	 * returns the tags the user selected, parsed into a filter query string
	 * @returns
	 */
	function getAllSelectedTagsInFormat() {
		let strapiQuery = "";
		selectedTags.map((item) => {
			strapiQuery += `&filters[tags][$in]=${item}`;
		})

		return strapiQuery;
	}

	/**
	 * returns all tags from all strapi datas, and sets the coresponding usestate
	 * @returns
	 */
	function getAllCurrentTagsArray() {
		let allTags = [];

		// Take all the tags current in a card displayed on the page
		eventStrapiData?.map((item) => {
			allTags.push(item.attributes.tags);
		})

		attractionStrapiData?.map((item) => {
			allTags.push(item.attributes.tags);
		})

		businessStrapiData?.map((item) => {
			allTags.push(item.attributes.tags);
		})

		setAllTags([...new Set(allTags)]); // remove duplicates
		return allTags;
	}

	/**
	 * This will request a new set of cards based on the tags selected
	 */
	function doFilter() {
		getAllCurrentTagsArray(); // get all current tags

		console.log("filtering...")
		async function fetchFilterResult() {
			// abort if no tags
			if (selectedTags[0] === undefined) {
				console.log("No tags, aborting, showing all results")
				return;
			}

			/**
			 * @param {*} variant useState to read
			 * @param {*} setter setter for the useState
			 */
			async function askStrapiForFilters(variant, setter) {
				const gotData = await fetch(
					`https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/${variant}/?populate=*${getAllSelectedTagsInFormat()}`);
				const searchData = await gotData.json();
				// console.log("got data")
				// console.log(searchData);
				setter(searchData.data);
			}

			askStrapiForFilters("events", setEventsStrapiData);
			askStrapiForFilters("businesses", setBusinessStrapiData);
			askStrapiForFilters("attrractions", setAttractionStrapiData);
		}

		fetchFilterResult()
	}



	/**
	 * Misc functions
	 */


	/**
	 * Read from text input component
	 * @param {*} data 
	 */
	const readQuery = (data) => {
		// console.log("recieved")
		// console.log(data)
		setSearchQuery(data)
	}

	/**
	 * Read the type to sort by from the user
	 * @param {*} data 
	 */
	const readSortType = (data) => {
		// console.log("recieved type " + data.target.value);
		setSortFlags([data.target.value, sortFlags[1]]);
	}

	/**
	 * Read the direction to sort by from the user
	 * @param {*} data 
	 */
	const readDirection = (data) => {
		// console.log("recieved fdirection " + data.target.value);
		setSortFlags([sortFlags[0], data.target.value]);
	}

	/**
	 * Read the tags to the user wants to filter by
	 * @param {*} data 
	 */
	const readTag = (data) => {
		// if checked, add to array, else remove from array
		data.target.checked ? setSelectedTags([...selectedTags, data.target.value])
			:
			setSelectedTags([...selectedTags.filter(tag => tag != data.target.value)]);
	}

	/**
	 * Trigger a reload of the cards
	 */
	useEffect(() => {
		async function fetchStrapiData() {
			// console.log("Reloading all");
			setEventsStrapiData(eventStrapiData);
			setAttractionStrapiData(attractionStrapiData);
			setBusinessStrapiData(businessStrapiData);
			// console.log(eventStrapiData);
		}

		fetchStrapiData()
	}, [reloadLocalCards])


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

          .search-title {
            font-size: var(--font-size-header-M);
            margin: 0px 10px;
          }


          .filter-sort {
			display: flex;
            align-self: end;
			flex-wrap: wrap;
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


		  {/* Sorting and filtering */}
			.sortOptions-wrap {
				display: flex;
				flex-direction: column;
				align-items: start;
				margin-right: 20px;
				font-size: var(--font-size-body-Mplus);
            	font-family: var(--font-roboto);
			}
		  .sortOptions-wrap div {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			{/* margin: 0px 5px */}
		  }
		  .sortOptions * {
			margin-right: 5px;
		  }

		  .filterOptions-wrap {
			flex-wrap: wrap;
			max-height: 60px;
		  }


		  @media screen and (max-width: 639px) {
            .search-title {
              font-size: var(--font-size-header-S);
            }

			.filterOptions-wrap {
				max-height: none;
				margin-bottom: 20px;
			}
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

						<div className="sortOptions-wrap filterOptions-wrap ">
						<p style={{ fontSize: "16px", marginBottom: "5px", fontWeight: "bold" }}>Filter By:</p>
							{
								allTags.map((tag, index) => (
									
									<div className="sortOptions" key={index}>
										<input type="checkbox" id={tag} name={tag} value={tag} onChange={readTag} />
										<label htmlFor={tag}>{tag}</label>
									</div>
								))
							}
						</div>

						<div className="sortOptions-wrap">
							<p style={{ fontSize: "16px", marginBottom: "5px", fontWeight: "bold" }}>Sort By:</p>
							<div className="sortOptions">

								<label htmlFor="type1">ID</label>
								<input type="radio" id="type1" name="type" value="id" onChange={readSortType} />
								<label htmlFor="type2">Title</label>
								<input type="radio" id="type2" name="type" value="title" onChange={readSortType} />
								<label htmlFor="type3">Date</label>
								<input type="radio" id="type3" name="type" value="date" onChange={readSortType} />
							</div>

							<div className="sortOptions">
								<label htmlFor="direction1">Ascending</label>
								<input type="radio" id="direction1" name="direction" value="asc" onChange={readDirection} />
								<label htmlFor="direction1">Descending</label>
								<input type="radio" id="direction2" name="direction" value="des" onChange={readDirection} />
							</div>

						</div>
						<div>
							<DefaultButton className="filter-sort-btn" onClick={() => { doFilter() }}>Filter</DefaultButton>
							<DefaultButton className="filter-sort-btn" onClick={() => {
								doSort(eventStrapiData, setEventsStrapiData);
								doSort(attractionStrapiData, setAttractionStrapiData);
								doSort(businessStrapiData, setBusinessStrapiData);
							}}>Sort</DefaultButton>
						</div>
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
