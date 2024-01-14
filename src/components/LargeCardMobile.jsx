import React from "react";
import { faStar as faStarfilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import DefaultButton from "./DefaultButton";
import ReactMarkdown from "react-markdown";

export default function LargeCardMobile({
	title = "Title",
	address = "101 Address Street, Lincoln, ON",
	category = "Other",
	description = "Explore endless fields of vines and grapes, with twists and turns to your hearts content. Fun for the whole family. Enjoy a warm, sunny day, in the relaxing yards of vine. Hurry up! Space is limited!",
	hoursOfOperation,
	rating,
	isEvent = false,
	isTicket = false,
	isRegisterable = false,
	isFull = false,
	isAvail = false,
	ticketDate = "2023-10-17",
	timeStart = "18:00:00",
	timeEnd = "20:30:00",
	ticketPrice = 0,
	imgSrc = "https://travelforfoodhub.com/wp-content/uploads/2023/05/Best-Wine-Regions-in-Europe.jpg",
	imgAltText,
	barcodeUID,
	forceMaxWidth = false,
}) {
	//code
	function renderStars() {
		const stars = [];
		for (let i = 0; i < 3; i++) {
			const icon = i < rating ? faStarfilled : faStarOutline;
			stars.push(<FontAwesomeIcon icon={icon} />);
		}
		return stars;
	}

	function tConvert(timeString) {
		const [hourString, minute] = timeString.split(":");
		const hour = +hourString % 24;
		return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
	}

	const categoryColors = {
		Restaurant: "#ff0303",
		Music: "#b33978",
		Performing_Arts: "#8b288f",
		Festival: "#56288f",
		Sports: "#1922a6",
		Charity: "#515cf0",
		Other: "#10649c",
		Tours: "#10929e",

		Monument: "#1eb07f",
		Mall: "#5ea890",
		Park: "#268034",
		Food: "#06590a",
		Shopping: "#74914d",
		Technology: "#90941e",
		Financial: "#b58412",
		Distribution: "#694c0a",
		Medical: "#009179",
		Emergency: "#666666",
		Industrial: "#b04300"
	};


	/**
	 * This function checks if category is in the list of categoryColours
	 * If no matchm the default colour (Other) is returned
	 * @param {*} category 
	 * @returns 
	 */
	function checkCategory(category) {
		if (category in categoryColors) {
			return category;
		} else {
			return "Other";
		}
	}


	// do not allow register for full events
	isFull ? isRegisterable = false : {};
	// tickets are not registerable by definition
	isTicket ? isRegisterable = false : {};

	category = checkCategory(category);

	//html
	return (
		<>
			<div className="large-card-mobile">
				<div className="image-container"></div>
				<img src={imgSrc} alt={imgAltText} className="content-img"></img>
				<div className="card-information-wrap">
					<div className="large-info-wrap">
						<div className="large-info-wrap-left">
							<h1 className="title">{title}</h1>
							<div className="address-wrap">
								<img src="location-icon.svg"/>
								<h2 className="address">{address}</h2>
							</div>
							{rating !== undefined && (
								<div className="star-container">{renderStars()}</div>
							)}
						</div>
						<div className="large-info-wrap-right">
							<div className="category-tag">
								<h1>{category}</h1>
							</div>
						</div>
					</div>
					<div className="description-wrap">
						<div className="description-text">{description}</div>
						<div className="border-line"></div>
						{isEvent && isTicket ? ( // ticket
							<div className="ticket-wrap">
								<p className="ticket-text">Date: {ticketDate}</p>
								<p className="ticket-text">
									Time: {tConvert(timeStart)} to {tConvert(timeEnd)}
								</p>
								<img
									src="https://i.stack.imgur.com/oSqy5.png"
									className="ticket-code-img"
								></img>
							</div>
						) : isEvent && !isTicket && isRegisterable ? ( // register for paid events
							<div className="event-wrap">
								<p className="ticket-text">Date: {ticketDate}</p>
								<p className="ticket-text">
									Time: {tConvert(timeStart)} to {tConvert(timeEnd)}
								</p>
								<hr></hr>
								<p className="ticket-text">
									Price: ${(Math.round(ticketPrice * 100) / 100).toFixed(2)}
								</p>
								<DefaultButton isLink={true} href={{ pathname: "./checkout", query: { whichSelection: barcodeUID } }}>Purchase</DefaultButton>
							</div>
						) : isEvent && !isTicket && !isRegisterable ? ( // free events
							<div className="event-wrap">
								{!isFull ? <p className="ticket-text">Always open!</p> : <p className="ticket-text">*Currently Full*</p>}
								<p className="ticket-text">Date: {ticketDate}</p>
								<p className="ticket-text">
									Time: {tConvert(timeStart)} to {tConvert(timeEnd)}
								</p>
							</div>
						) : ( // attractions, business
							<div className="description2-text">
								{isAvail ? <h1 className="hours-title">Hours of Operation:</h1> : <p className="hours-title">*Currently Closed*</p>}
								<div className="markdown-wrap">
									<ReactMarkdown className="hours-description">
										{hoursOfOperation}
									</ReactMarkdown>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<style jsx>
				{`
				.large-card-mobile {
					display: flex;
					flex-direction: column;
					max-width: 360px;
					min-width: ${forceMaxWidth ? "360px" : "0px"};
					max-height: 400px;
					overflow: hidden;
					box-shadow: var(--shadow-box-massive-card);
				}

				.image-container {
					max-width: 360px;
					{/* height: 156px; */}
					background-position: center center;
					background-repeat: no-repeat;
					background-image: url("https://travelforfoodhub.com/wp-content/uploads/2023/05/Best-Wine-Regions-in-Europe.jpg");
					background-size: cover;
				}

				.content-img {
					object-fit: fill;
				}

				.card-information-wrap {
					display: flex;
					flex-direction: column;
					padding: 10px 15px;
					background-color: white;

					position: sticky;
					bottom: 0px;
				}

				.large-info-wrap {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}
				.star-container {
					display: flex;
					gap: 3px;
					margin-top: 2px;
					margin-bottom: 12px;
				}

				.category-tag {
					border-radius: var(--border-radius-pill);
					color: white;
					background-color: ${categoryColors[category]};
					padding: 8px 12px;
					font-weight: 800;
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-M);
				}

				.title {
					font-family: var(--font-calps);
					font-size: var(--font-size-header-XS);
					font-weight: 900;
				}

				.address-wrap {
					display: flex;
					flex-direction: row;
					gap: 4px;
					align-items: center;
				}

				.address {
					padding-left: 5px;
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-M);
					font-weight: 400;
					padding-bottom: 2px;
				}

				.description-wrap {
					display: flex;
					flex-direction: row;
					{/* justify-content: space-around; */}
					{/* width: 360px; */} {/* commented to try to be responsive*/}
					align-items: center;
				}

				.description-text {
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-M);
					line-height: 1.6;
					font-weight: 400px;
					margin-top: 10px;
					margin-bottom: auto;
					flex-grow: 1;

					overflow-y: scroll;
					max-height: 150px;
					word-wrap: break-word;
				}

				{/* scroll bar settings*/}
				::-webkit-scrollbar {
					width: 5px;
					height: 5px;
				}
				::-webkit-scrollbar-thumb {
					background: #d4d4d4;
				}

				.border-line {
					border-left: 1px solid grey;
					height: 150px;
					margin-left: 5px;
					margin-right: 5px;
				}

				.description2-wrap {
					display: flex;
					flex-direction: column;
					overflow-y: auto;
				}

				.hours-title {
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-M);
					font-weight: 700;
					padding-bottom: 5px;
					padding-left: 4px;
				}


				.ticket-wrap {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 5px;
					margin-right: 10px;
				}

				.event-wrap {
					display: flex;
					flex-direction: column;
					gap: 5px;
					margin-left: 5px;
					overflow-y: auto;
					max-height: 100%;
					min-width: 100px;
				}

				.ticket-text {
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-S);
					line-height: 1.4;
					{/* padding-right: 10px; */}
					text-align: center;
				}

				.markdown-wrap {
				}

				@media screen and (max-width: 500px) {
					.large-card-mobile {
						min-width: 270px;
					}
				}

      			`}
	  		</style>
		</>
	);
}
