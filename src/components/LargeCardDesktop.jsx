import React from "react";
import { faStar as faStarfilled } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import DefaultButton from "./DefaultButton";
import ReactMarkdown from "react-markdown";
import {categoryColors} from "../../server/data";

export default function LargeCardDesktop({
	title = "Title",
	address = "101 Address Street, Lincoln, ON",
	category = "restaurant",
	description = "Explore endless fields of vines and grapes, with twists and turns to your hearts content. Fun for the whole family. Enjoy a warm, sunny day, in the relaxing yards of vine. Hurry up! Space is limited! Our Vineyards are open to the public between April 23 and November 4th. Please note that weather circumstances may change, please dress accordingly and prepare for the weather. We are not responsible for lost belongings.",
	hoursOfOperation = "place",
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
}) {
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
			<div className="large-card-desktop">
				<div className="image-container">
					<img src={imgSrc} alt={imgAltText}></img>
				</div>

				<div className="card-information-wrap">
					<div className="large-info-wrap">
						<div className="large-info-wrap-left">
							<h1 className="title">{title}</h1>
							<div className="address-wrap">
								<img src="location-icon.svg" />
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

						{isEvent && isTicket ? (
							<div className="ticket-wrap">
								<p className="ticket-text">Date: {ticketDate}</p>
								<p className="ticket-text">
									Time: {tConvert(timeStart)} to {tConvert(timeEnd)}
								</p>
								<div className="ticket-code-img">
									<img
										src="https://i.stack.imgur.com/oSqy5.png"
										stlye={{ width: "100%", height: "100%" }}
									></img>
								</div>

							</div>
						) : isEvent && !isTicket && isRegisterable ? (
							<div className="event-wrap">
								<p className="ticket-text">Date: {ticketDate}</p>
								<p className="ticket-text">
									Time: {tConvert(timeStart)} to {tConvert(timeEnd)}
								</p>
								<h1 className="price">
									Price: ${(Math.round(ticketPrice * 100) / 100).toFixed(2)}
								</h1>
								<DefaultButton isLink={true} href={{ pathname: "./checkout", query: { whichSelection: barcodeUID } }}>Purchase</DefaultButton>
							</div>
						) : isEvent && !isTicket && !isRegisterable ? (
							<div className="event-wrap">
								{!isFull ? <p className="ticket-text">Always open!</p> : <p className="ticket-text">Currently Full.</p>}
								<p className="ticket-text">Date: {ticketDate}</p>
								<p className="ticket-text">
									Time: {tConvert(timeStart)} to {tConvert(timeEnd)}
								</p>
							</div>
						) : (
							<div className="description2-text">
								{isAvail ? <h1 className="ticket-text">Hours of Operation:</h1> : <p className="ticket-text">Currently Closed.</p>}
								<div className="markdown-wrap">
									<ReactMarkdown className="hours-description-lc">
										{hoursOfOperation}
									</ReactMarkdown>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* styles */}
			<style jsx>{`
				.large-card-desktop {
					display: flex;
					flex-direction: row;
					max-width: 1200px;
					max-height: 408px;
					overflow: hidden;
					box-shadow: var(--shadow-box-massive-card);
					border-radius: 15px;
				}

				.image-container {
					max-width: 35%;
					min-width: 35%;
					height: 408px;
					background-position: center center;
					background-repeat: no-repeat;
					background-image: url("https://travelforfoodhub.com/wp-content/uploads/2023/05/Best-Wine-Regions-in-Europe.jpg");
					background-size: cover;
				}

				.image-container img {
					object-fit: cover;
					height: 100%;
					width: 100%;
				}

				.card-information-wrap {
					display: flex;
					flex-direction: column;
					padding: 32px;
					background-color: white;
					width: 100%;
				}

				.large-info-wrap {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}

				.star-container {
					display: flex;
					gap: 4px;
					margin-top: 5px;
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
					margin-top: 5px;
				}

				.address {
					padding-left: 5px;
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-Mplus);
					font-weight: 400;
				}

				.description-wrap {
					display: flex;
					flex-direction: row;
					margin-top: 10px;
					align-items: center;
				}

				.description-text {
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-Mplus);
					font-weight: 500;
					max-height: 250px;
					padding-right: 20px;
					line-height: 1.7;
					flex-grow: 1;

					overflow-y: scroll;
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
					height: 215px;
				}

				.description2-text {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 0px 0px 0px 15px;
					max-width: 200px;
				}

				.description2-text > h1 {
					white-space: nowrap;
				}

				.description2-text > p {
					white-space: nowrap;
				}

				.hours-title {
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-Mplus);
					font-weight: 700;
					padding-bottom: 10px;
				}

				.ticket-wrap {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding-left: 15px;
					min-width: 240px;
					text-align: center;
					flex-grow: 1;
				}

				.ticket-code-img {
					display: block;
					width: 200px;
					margin-top: 12px;
				}

				.event-wrap {
					display: flex;
					flex-direction: column;
					justify-self: end;
					gap: 5px;
					margin-left: 25px;
					width: 120px;
					min-width: 120px;
					text-align: center;
				}

				.ticket-text {
					font-family: var(--font-roboto);
					font-size: 18px;
					font-weight: 600;
					line-height: 1.4;
				}

				.markdown-wrap {
				}

				`}
			</style>
		</>
	);
}
