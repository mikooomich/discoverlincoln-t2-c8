import React from "react";

import LargeCardDesktop from "@/components/LargeCardDesktop";
import LargeCardMobile from "@/components/LargeCardMobile";
import LargeCardList from "@/components/LargeCardList";
import CardCarousel from "./CardCarousel";
import SmallCard from "./SmallCard";
import dynamic from 'next/dynamic'
import DefaultButton from "./DefaultButton";
const MapCard = dynamic(() => import("@/components/MapCard"), { ssr: false })
import { useEffect } from "react";

export default function EventAttractionTemplate({
	variant = "events",
	strapiDataLink,
	strapiDataLinkSetter
}) {



	/**
 * Trigger a reload of the cards
 */
	useEffect(() => {
		async function fetchStrapiData() {
			console.log("Reloading all");

			// console.log(eventStrapiData);
			strapiDataLinkSetter(strapiDataLink);
		}

		fetchStrapiData()
	}, [strapiDataLink])



	const itemSelector = (id) => {
		// create new array, deselect all items first
		let temp = strapiDataLink?.map((element) => {
			// console.log(element)
			if (element.isSelected) {
				element.isSelected = false;
			}
			return element;
		}
		)

		// select the item with the id
		temp = temp?.map((element) => {
			if (element.id == id) {
				element.isSelected = true;
				// console.log("selected"); console.log(element);
			}
			return element;
		})


		strapiDataLinkSetter(temp);

	}


	return (
		<>
			<style jsx>
				{`
          .iconBackdrop {
            width: 450px;
            height: 500px;
            position: fixed;
            z-index: -99;

            transform: rotate(-25deg) translate(20px, 80px);
            background-color: rgb(170, 170, 170);
          }

          .psudoBody {
            margin: auto;
            width: 100%;
          }

          .maincontent {
            max-width: 100%;
            margin: 0 100px;
            display: flex;
            flex-direction: column;
            font-family: var(--font-calps);
            font-weight: bold;
          }

          /* Titles */
          .titleBlock {
            display: flex;
            flex-direction: column;
            margin-top: 50px;
            gap: 25px;
          }

          .titleBlock p {
            font-family: var(--font-calps);
            font-weight: var(--font-weight-titles);
            font-size: 24px;

            /* Hax for calps font spacing */
            /* margin-bottom: 20px; */
            position: relative;
            top: -30px;
          }

          /* Events content  */
          /* .offerings {
                background-color: rgba(0, 0, 0, 0.332);
        } */

          .mobileOfferings {
            display: none;
            flex-direction: column;
          }

          #mobileOfferingsTitles {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          /* scroll bar */
          ::-webkit-scrollbar-thumb {
            background: var(--color-font-secondary);
          }
          ::-webkit-scrollbar {
            width: 5px;
          }

          /* Placeholder cards */
          .cards-mobile {
            display: none;
          }

          .info {
            width: 700px;
            min-height: 400px;
            float: right;

            background-color: rgb(241, 184, 70);
          }

          /* EndPlaceholder cards */

          h1 {
            font-family: var(--font-calps);
            font-size: var(--font-size-header-L);
            font-weight: var(--font-weight-titles);
          }

          .offerings-text {
            font-family: var(--font-calps);
            font-size: var(--font-size-header-M);
            font-weight: var(--font-weight-titles);
          }

          h2 {
            font-size: var(--font-size-header-S);
          }

{/* Map stuff */}
		  .mapContainer {
            background-color: #d4d4d4;
			margin-bottom: 50px;
            width: 100%;
          }
			.smallCardli {
				margin: 10px 10px 5px 10px;
			}
	
		.mapCarousel-wrap {
			width: 330px;
			height: 400px;
			overflow-y: scroll;
		}


          @media screen and (max-width: 1000px) {
            /* Maybe use mobile cards here */
            .titleBlock p {
              /* removed Hax for calps font spacing */
              margin-top: 10px;
            }
            .maincontent {
              margin: 0 30px;
            }
          }

		  @media screen and (max-width: 800px) {
			{/* for map only */}
			.mapCarousel-wrap {
				width: 100%;
				height: 220px;
			}
			}

          @media screen and (max-width: 550px) {
            /* Mobile view. Map gets thrown to bottom, collaps */

            h1 {
              font-size: var(--font-size-header-M);
            }

            h2 {
              font-size: var(--font-size-body-L);
            }

            #offeringsSubheading {
              display: flex;
            }

            #browseBtn {
            }

            .titleBlock p {
              font-size: var(--font-size-body-Mplus);
              /* remove Hax for calps font spacing */
              margin-top: 16px;
            }

            .maincontent {
              margin: 0 10px;
            }

            /* reformat cards for mobile */
            .offerings {
            }

            .offerings-text {
              font-family: var(--font-calps);
              font-size: var(--font-size-header-S);
            }

            .mobileOfferings {
              display: flex;
            }

            .cards-desktop {
              display: none;
            }

            .cards-mobile {
              display: flex;
              flex-direction: column;

              nav ul {
                height: 500px;
                width: 400px;
                background-color: rgba(0, 255, 255, 0.227);
              }
            }


			

		



			{/* small cards  */}

          }
        `}
			</style>

			<div className="psudoBody">
				<div className="iconBackdrop"></div>

				<div className="maincontent">
					<div className="titleBlock">
						{variant == "events" && (
							<>
								<h1>Upcomming Events</h1>
								<p>There is always something around the corner</p>
							</>
						)}

						{variant == "attractions" && (
							<>
								<h1>Attractions</h1>
								<p>Eye spy with my little eye...</p>
							</>
						)}
					</div>


					<div className="mapContainer">
						<MapCard strapiDataLink={strapiDataLink} itemSelector={itemSelector}>
					
					
						<div className="mapCarousel-wrap">
						<CardCarousel margin="0px 0px 20px 0px">
							{strapiDataLink?.map((card, index) => (
								<li key={index} className={`smallCardli`}>
									<DefaultButton onClick={() => { itemSelector(card.id) }} className={`blank ${card.isSelected ? "selectedCard" : ""}`}>


										<SmallCard
											title={card.attributes.title}
											imgSrc={card.attributes.image.data.attributes.url}
											category={card.attributes.tags}
											scrollLink={card.refLink}
											scrollLinkMobile={card.refLinkMobile}
										>

											<img src="Icon-glass.svg" width={20} height={20} alt="uwu" />
										</SmallCard>
									</DefaultButton>
								</li>
							))}
						</CardCarousel>
					</div>
					</MapCard>
					</div>

				


					<div className="offerings">
						<h1 className="offerings-text">All Offerings</h1>

						{/* scrollable offerings */}
						<div className="cards-desktop">
							<LargeCardList>
								{strapiDataLink?.map((element, index) => (
									<div key={index} ref={(r) => {
										element.refLink = r;
									}}>
										<LargeCardDesktop
											isTicket={false}
											title={element.attributes.title}
											isEvent={variant === "events" ? true : false}
											description={element.attributes.description}
											address={element.attributes.location}
											ticketDate={element.attributes.date}
											ticketTime={`${element.attributes.startTime} - ${element.attributes.endTime}`}
											rating={element.attributes.numStars}
											category={element.attributes.tags}
											imgSrc={element.attributes.image.data.attributes.url}
											imgAltText={element.attributes.image.data.attributes.alternativeText}
											barcodeUID={element.attributes.barcodeUID}

											isRegisterable={element.attributes.isRegisterable}
											isFull={element.attributes.isFull}
											isAvail={element.attributes.isAvailable}
											hoursOfOperation={element.attributes.hoursOfOperation}
										></LargeCardDesktop>
									</div>
								))}
							</LargeCardList>
						</div>
						<div className="cards-mobile">
							<LargeCardList>
								{strapiDataLink?.map((element, index) => (
									<div key={index} ref={(r) => {
										element.refLinkMobile = r;
									}}>
										<LargeCardMobile
											isTicket={false}
											isEvent={variant === "events" ? true : false}
											title={element.attributes.title}
											description={element.attributes.description}
											address={element.attributes.location}
											ticketDate={element.attributes.date}
											ticketTime={`${element.attributes.startTime} - ${element.attributes.endTime}`}
											rating={element.attributes.numStars}
											category={element.attributes.tags}
											imgSrc={element.attributes.image.data.attributes.url}
											imgAltText={element.attributes.image.data.attributes.alternativeText}
											barcodeUID={element.attributes.barcodeUID}

											isRegisterable={element.attributes.isRegisterable}
											isFull={element.attributes.isFull}
											isAvail={element.attributes.isAvailable}
											hoursOfOperation={element.attributes.hoursOfOperation}
										></LargeCardMobile>
									</div>
								))}
							</LargeCardList>
						</div>
					</div>
				</div>
			</div >
		</>
	);
}
