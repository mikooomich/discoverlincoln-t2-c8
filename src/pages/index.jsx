import React from "react";
import Image from "next/image";

import TextInput from "@/components/TextInput";
import Section from "@/components/Section";
import LargeCardMobile from "@/components/LargeCardMobile";
import CardCarousel from "@/components/CardCarousel";
import Gallery from "@/components/Gallery";
import GalleryImage from "@/components/GalleryImage";
import SmallCard from "@/components/SmallCard";
import DefaultButton from "@/components/DefaultButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export const SERVER_URL = "http://localhost:25753";

export default function Homepage() {
	const [eventsStrapiData, setEventsStrapiData] = useState([]); // events
	const [attractionStrapiData, setAttractionStrapiData] = useState([]);
	const [businessStrapiData, setBusinessStrapiData] = useState([]);
	const [galleryStrapiData, setGalleryStrapiData] = useState([]);

	const [searchQuery, setSearchQuery] = useState([]); // the thing to search for

	useEffect(() => {
		async function fetchStrapiData() {
			const eventResponse = await fetch(
				`${SERVER_URL}/api/events`
			);
			const eventData = await eventResponse.json();
			setEventsStrapiData(eventData);

			const attractionResponse = await fetch(
				`${SERVER_URL}/api/attractions`
			);
			const attractionData = await attractionResponse.json();
			setAttractionStrapiData(attractionData);

			const businessResponse = await fetch(
				`${SERVER_URL}/api/businesses`
			);
			const businessData = await businessResponse.json();
			setBusinessStrapiData(businessData);

			const galleryResponse = await fetch(
				`${SERVER_URL}/api/gallery`
			);
			const galleryData = await galleryResponse.json();
			setGalleryStrapiData(galleryData);
		}

		fetchStrapiData();
	}, []);

	/**
	 * Read from text input component
	 * @param {*} data
	 */
	const readQuery = (data) => {
		setSearchQuery(data)
	}

	/**
	 * Take action on enter press
	 * @param {*} event 
	 */
	const handleKeyPress = (keyPress) => {
		if (keyPress.key === 'Enter') {
			// I am not sure how well this works with % encoding but oh well
			window.location.href = `/search?searchQuery=${searchQuery}`
		}
	}

	return (
		<>
			<div className="homepage">
				<div className="everything-excl-foot">
					<Navbar isHomepage={true}></Navbar>
					<div className="landing-view-bg">
						<div className="landing-view-wrap">
							<div className="landing-view-greet">
								<div className="greeting-frame">
									<h1 className="discover-text">Discover</h1>
									<h1 className="lincoln-text">LINCOLN</h1>
									<p className="greeting-description-text">
										Welcome to the Town of Lincoln! The places you will go, and
										the sights you will see, may the rolling hills be in your
										favour.
										<br /><br />
										<span style={{ color: "red", fontWeight: "bold" }}>DISCLAIMER:</span>THE THEME OF THE WEBSITE IS ABOUT LINCOLN, HOWEVER IS NOT REPRESENTATIVE AND IS NOT AFFILIATED WITH THE TOWN OF LINCOLN IN ANY WAY.
									</p>
									<div className="search-area">
										<div className="see-lincoln-wrapper">
											<DefaultButton
												className="see-lincoln"
												fontSize={"18px"}
												bgColor={"white"}
												textColor={"black"}
												padding={"0px 12px"}
											>
												SEE LINCOLN
											</DefaultButton>
										</div>
										<div className="search-button-area">
											<DefaultButton isLink={true} href={{ pathname: "./search", query: { searchQuery } }} className="see-lincoln home-search-btn">
												<FontAwesomeIcon icon={faMagnifyingGlass} />
											</DefaultButton>
											<TextInput
												type="text"
												className="search-input"
												placeholder="Search..."
												padding={"0px 12px"}
												dataOut={readQuery}
												onKeyDownOut={handleKeyPress}
											></TextInput>
										</div>
									</div>
								</div>
								<div className="upcoming-events-wrap">
									<div className="event-card-frame">
										<div className="upcoming-events-gap-desktop"></div>
										<div className="upcoming-events-gap-mobile"></div>
										<CardCarousel margin="0px 0px 20px 0px">
											<h1 className="upcoming-events-subtitle">
												Upcoming Events
											</h1>

											{/* small event cards */}
											{eventsStrapiData?.slice(0, 3).map((card, index) => (
												<li key={index} className="smallCardli">
													<SmallCard
														title={card.attributes.title}
														imgSrc={card.image.data || card.image.url}
														category={card.attributes.tags}
													>
														{" "}
														<Image
															src="Icon-glass.svg"
															width={20}
															height={20}
															alt="uwu"
														/>
													</SmallCard>
												</li>
											))}
										</CardCarousel>
									</div>
									<DefaultButton
										isLink={true}
										href="./events"
										className="homepage-SmallCard"
										padding={"0px 12px"}
									>
										SEE ALL
									</DefaultButton>
								</div>
							</div>
							<div className="topology-wrap">
								<img src="topology.svg"/>
							</div>
						</div>
					</div>
					<div className="page-buttons">
						<div className="image-home">
							<img
								src="https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fHww&w=1000&q=80"
								style={{ width: "100%", height: "100%" }}
							></img>
						</div>
						<div className="text-and-buttons">
							<p className="image-description">
								Nestled in the heart of Ontarios picturesque Niagara Region,
								Lincoln is a charming and vibrant community that often flies
								under the radar. Lincoln offers its own unique blend of natural
								beauty, rich history, and thriving agriculture. <br />
								<br />
								On a journey through Lincoln, you will uncover attractions,
								culture, and events that make it a hidden gem worth discovering
							</p>
							<div className="buttons">
								<DefaultButton
									isLink={true}
									href="./events"
									className=" hero-under-buttons"
								>
									Events
								</DefaultButton>
								<DefaultButton
									isLink={true}
									href="./attractions"
									className=" hero-under-buttons"
								>
									Attractions
								</DefaultButton>
								<DefaultButton
									isLink={true}
									href="./business-service"
									className=" hero-under-buttons"
								>
									Businesses
								</DefaultButton>
							</div>
						</div>
					</div>

					<Section marginBottom="40px" marginTop="200px">
						<CardCarousel title="Events" margin="80px 0px 80px 0px">
							{eventsStrapiData?.map((card, index) => (
								<li key={index}>
									<LargeCardMobile
										isTicket={false}
										isEvent={true}
										title={card.attributes.title}
										description={
											card.attributes.richTextDescription != undefined
												? card.attributes.richTextDescription
												: card.attributes.description
										}
										address={card.attributes.location}
										ticketDate={card.attributes.date}
										ticketTime={`${card.attributes.startTime} - ${card.attributes.endTime}`}
										ticketPrice={card.attributes.cost}
										rating={card.attributes.numStars}
										category={card.attributes.tags}
										imgSrc={card.image.data || card.image.url}
										imgAltText={
											card.image.alternativeText
										}
										barcodeUID={card.attributes.barcodeUID}
										isRegisterable={card.attributes.isRegisterable}
										isFull={card.attributes.isFull}
										isAvail={card.attributes.isAvailable}
										hoursOfOperation={card.attributes.hoursOfOperation}
									></LargeCardMobile>
								</li>
							))}
						</CardCarousel>
						<DefaultButton
							isLink={true}
							href="./events"
							className=" homepage-see-more"
						>
							See More
						</DefaultButton>
						<div className="carousel-padding"></div>
						<hr />
						<div className="carousel-padding"></div>
						<CardCarousel title="Attractions" margin="0px 0px 80px 0px">
							{attractionStrapiData?.map((card, index) => (
								<li key={index}>
									<LargeCardMobile
										isTicket={false}
										isEvent={false}
										title={card.attributes.title}
										description={
											card.attributes.richTextDescription != undefined
												? card.attributes.richTextDescription
												: card.attributes.description
										}
										address={card.attributes.location}
										ticketDate={card.attributes.date}
										ticketTime={`${card.attributes.startTime} - ${card.attributes.endTime}`}
										rating={card.attributes.numStars}
										category={card.attributes.tags}
										imgSrc={card.image.data || card.image.url}
										imgAltText={
											card.image.alternativeText
										}
										barcodeUID={card.attributes.barcodeUID}
										isRegisterable={card.attributes.isRegisterable}
										isFull={card.attributes.isFull}
										isAvail={card.attributes.isAvailable}
										hoursOfOperation={card.attributes.hoursOfOperation}
									></LargeCardMobile>
								</li>
							))}
						</CardCarousel>
						<DefaultButton
							isLink={true}
							href="./attractions"
							className=" homepage-see-more"
						>
							See More
						</DefaultButton>
						<div className="carousel-padding"></div>
						<hr />
						<div className="carousel-padding"></div>

						<CardCarousel title="Business" margin="20px 0px 80px 0px">
							{businessStrapiData?.map((card, index) => (
								<li key={index}>
									<LargeCardMobile
										isTicket={false}
										isEvent={false}
										title={card.attributes.title}
										description={
											card.attributes.richTextDescription != undefined
												? card.attributes.richTextDescription
												: card.attributes.description
										}
										address={card.attributes.location}
										ticketDate={card.attributes.date}
										ticketTime={`${card.attributes.startTime} - ${card.attributes.endTime}`}
										rating={card.attributes.numStars}
										category={card.attributes.tags}
										imgSrc={card.image.data || card.image.url}
										imgAltText={
											card.image.alternativeText
										}
										barcodeUID={card.attributes.barcodeUID}
										isRegisterable={card.attributes.isRegisterable}
										isFull={card.attributes.isFull}
										isAvail={card.attributes.isAvailable}
										hoursOfOperation={card.attributes.hoursOfOperation}
									></LargeCardMobile>
								</li>
							))}
						</CardCarousel>
						<DefaultButton
							isLink={true}
							href="./business-service"
							className=" homepage-see-more"
						>
							See More
						</DefaultButton>

						<div className="carousel-padding"></div>
						<hr />
						<div className="carousel-padding"></div>

						<h2 className="events-title">Gallery</h2>

						<Gallery>
							{galleryStrapiData?.map((image, index) => (
								<GalleryImage
									src={image.data || image.url}
									alt={image.alternativeText}
									key={index}
								/>
							))}
						</Gallery>
					</Section>
				</div>

				<Footer></Footer>
			</div>

			<style jsx>
				{`
				li {
					margin: 20px 20px;
				}

				.smallCardli {
					margin: 10px 00px 5px 0px;
				}

				h2 {
					color: var(--color-font-primary);
					font-family: var(--font-calps);
					font-size: var(--font-size-header-S);
					font-style: normal;
					font-weight: 700;
					line-height: normal;
				}

				.homepage {
					display: flex;
					flex-direction: column;

					height: 100vh;
					justify-content: space-between;
				}

				.landing-view-bg {
					display: flex;
					flex-direction: column;
					background-image: url('hero-image.png');
					background-size: cover;
					background-repeat: no-repeat;
				}

				.landing-view-greet {
					display: flex;
					flex-direction: row;
					height: auto;
					justify-content: space-evenly;
					align-items: center;
					width: 100%;
					padding-top: 75px;
				}

				.greeting-frame {
					display: flex;
					flex-flow: column wrap;
					align-content: flex-start;
					margin-left: auto;
					margin-right: auto;
				}

				.discover-text {
					font-size: 73px;
					font-family: var(--font-calps);
					font-style: normal;
					font-weight: 700;
					line-height: 75.1%;
					color: white;
					padding-bottom: 10px;
					text-size-adjust: auto;
				}

				.lincoln-text {
					font-size: 125px;
					font-family: var(--font-calps);
					font-style: normal;
					font-weight: 950;
					line-height: 75.1%; /* 93.875px */
					text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

					color: white;
				}
				.greeting-description-text {
					font-family: var(--font-roboto);
					font-style: normal;
					font-weight: 500;
					font-size: 24;
					color: white;
					max-width: 550px;
					text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
					line-height: 150%;
					padding-top: 20px;
					padding-bottom: 35px;
				}

				.search-area {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					padding: 0px 0px 0px 0px;
					max-height: 40px;
				}

				.search-button-area {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					padding: 0px 0px 0px 20px;
				}

				.upcoming-events-gap-desktop {
					display: flex;
					height: 40px;
				}

				.upcoming-events-gap-mobile {
					display: none;
				}

				.upcoming-events-wrap {
					display: flex;
					flex-flow: column wrap;
					align-content: flex-start;
					max-width: 320px;
					height: auto;
					margin-top: 40px;
					margin-left: auto;
					margin-right: auto;
				}

				.upcoming-events-subtitle {
					color: #fff;
					text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
					font-family: var(--font-roboto);
					font-size: 24px;
					font-style: normal;
					font-weight: 700;
					line-height: 75.1%; /* 18.024px */
					margin-bottom: 20px;
				}

				.events-card-frame {
					width: 393px;
					height: 429px;
					background: rgb(220, 20, 60, 0.6);
					padding: 18px 15px 0px 16px;
					flex-direction: column;
					justify-content: flex-end;
					align-items: flex-start;
					box-shadow: 3px 5px 4px 0px rgba(0, 0, 0, 0.35);
				}

				.see-all-events-button {
					display: flex;
					width: 83px;
					height: 34px;
					padding: 7px 2px 2px 12px;
					background: #fff;
					backdrop-filter: blur(2px);
					color: black;
					font-family: var(--font-roboto);
					font-size: 16px;
					font-weight: 800;
					align-self: flex-end;
				}

				.page-buttons {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;

					background: var(--color-elevated-green);
					justify-content: center;
					width: 100%;
					gap: 30px;
					align-items: center;
				}

				.topology-wrap {
					display: flex;
					flex-direction: column;
				}

				.image-home {
					height: 430px;
					width: 390px;
					border: 5px solid white;
					position: relative;
					margin-bottom: -100px;
					box-shadow: var(--shadow-box-buttons);
				}

				.image-home img {
					object-fit: cover;
				}

				.text-and-buttons {
					display: flex;
					flex-direction: column;
					max-width: 900px;
					padding-left: 20px;
				}

				.carousel-padding {
					height: 30px;
				}

				.events-title{
					padding: 20px 0px;
				}

				.image-description {
					font-family: var(--font-roboto);
					font-style: normal;
					font-size: 18px;
					color: white;
					text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
					line-height: 170%;
					padding-bottom: 35px;
					padding-top: 20px;
				}

				.buttons {
					display: flex;
					flex-direction: row;
					margin-bottom: 30px;
					gap: 15px;
				}

				.buttons button {
					display: flex;
					padding: 6px 15px;
					background: var(--color-topographic-green);
					backdrop-filter: blur(2px);
					color: white;
					font-family: var(--font-roboto);
					font-size: 14px;
					font-weight: 800;
					font-style: normal;
					font-weight: 600;
					line-height: 140.1%; /* 22.416px */
					margin-left: 10px;
					margin-right: 10px;
					text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				}

				.see-lincoln-wrapper {
					display: flex;
					flex-direction: row;
					align-items: stretch;
				}

				@media screen and (max-width: 3000px) {
					.image-description {
						font-size: 24;
						width: 350px;
					}
				}

				@media screen and (max-width: 870px) {
					.landing-view-greet {
						margin-top: 120px;
						height: 1100px;
						flex-wrap: wrap;
						gap: 20px;
						height: auto;
					}

					.image-home {
						height: 430px;
						width: auto;
						max-width: 40%;
						margin-left: 20px;
					}
				}

				@media screen and (max-width: 720px) {
					.image-home {
						height: 230px;
						width: auto;
						max-width: 100%;
						margin-left: 20px;
						margin-right: 20px;
						margin-bottom: 0px;
						margin-top: 20px;
					}
				}

				@media screen and (max-width: 550px) {
					.discover-text {
								font-size: 64px;
							}

					.lincoln-text {
						font-size: 82px;
					}

					.see-lincoln-wrapper {
						display: none;
					}

					.greeting-frame {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
				}
				`}
			</style>
		</>
	);
}

Homepage.overrideDefaultNavs = true;
