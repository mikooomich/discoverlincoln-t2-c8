import CardCarousel from "@/components/CardCarousel";
import DefaultButton from "@/components/DefaultButton";
import Section from "@/components/Section";
import TextInput from "@/components/TextInput";
import LargeCardMobile from "@/components/LargeCardMobile";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [eventStrapiData, setEventsStrapiData] = useState([]); // events
  const [attractionStrapiData, setAttractionStrapiData] = useState([]);
  const [businessStrapiData, setBusinessStrapiData] = useState([]);

	useEffect(() => {
		async function fetchStrapiData() {
			const eventResponse = await fetch('https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/events?populate=*')
			const eventData = await eventResponse.json()
			// console.log(data)
			setEventsStrapiData(eventData.data)

      const attractionResponse = await fetch(
        "https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/attrractions?populate=*"
      );
      const attractionData = await attractionResponse.json();
      setAttractionStrapiData(attractionData.data);

      const businessResponse = await fetch(
        "https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/businesses?populate=*"
      );
      const businessData = await businessResponse.json();
      setBusinessStrapiData(businessData.data);

      // console.log(strapiData)
    }

    fetchStrapiData();
  }, []);

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

          @media screen and (max-width: 639px) {
            .search-title {
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
          <div className="searchBoxWithIcon">
            <DefaultButton>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </DefaultButton>

            <div className="searchBox">
              <TextInput placeholder={"Search"} width={`100%`}></TextInput>
            </div>
          </div>
          <div className="filter-sort">
            <DefaultButton className="filter-sort-btn">Filter</DefaultButton>
            <DefaultButton className="filter-sort-btn">Sort</DefaultButton>
          </div>
        </div>
      </Section>

      {/* Events Cards */}
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
                rating={card.attributes?.numStars}
                isTicket={false}
                isEvent={true}
								isRegisterable={card.attributes?.isRegisterable}
                ticketDate={card.attributes.date}
                timeStart={card.attributes.startTime}
                timeEnd={card.attributes.endTime}
                ticketPrice={card.attributes.ticketCost}
              ></LargeCardMobile>
            </li>
          ))}
        </CardCarousel>
        <hr />

				{/* Attractions Cards */}
        <CardCarousel title="Attractions" margin="40px 0px 40px 0px">
          {attractionStrapiData?.map((card, index) => (
            <li key={index}>
              <LargeCardMobile
                title={card.attributes.title}
                imgSrc={card.attributes.image.data.attributes.url}
                address={card.attributes.location}
                category={card.attributes.tags}
                description={card.attributes?.richTextDescription}
                rating={card.attributes?.numStars}
                hoursOfOperation={card.attributes?.hoursOfOperation}
              ></LargeCardMobile>
            </li>
          ))}
        </CardCarousel>
        <hr />

				{/* Business Cards */}
        <CardCarousel title="Business" margin="40px 0px 40px 0px">
          {businessStrapiData?.map((card, index) => (
            <li key={index}>
              <LargeCardMobile
                title={card.attributes.title}
                imgSrc={card.attributes.image.data.attributes.url}
                address={card.attributes.location}
                category={card.attributes.tags}
                description={card.attributes?.richTextDescription}
                rating={card.attributes?.numStars}
                hoursOfOperation={card.attributes?.hoursOfOperation}
              ></LargeCardMobile>
            </li>
          ))}
        </CardCarousel>
      </Section>
    </>
  );
}
