import LargeCardList from "@/components/LargeCardList";
import LargeCardDesktop from "@/components/LargeCardDesktop";
import React, { useState, useEffect } from "react";
import LargeCardMobile from "@/components/LargeCardMobile";
import Section from "@/components/Section";
import DefaultButton from "@/components/DefaultButton";

import { SERVER_URL } from "./index";

export default function Profile() {
  const [userStrapiData, setUserStrapiData] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const jwt = localStorage.getItem("jwt");

      const response = await fetch(
        `${SERVER_URL}/users/me`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (response.status != 200) { //not logged in, redirect to login
        window.location.href = "/login";
      }
      const userData = await response.json();
      setUserStrapiData(userData);
    }
    getUserData();
  }, []);


  async function logout() {
    localStorage.removeItem("jwt");
    const response = await fetch(`${SERVER_URL}/users/logout`, {method: "POST"});
    window.location.href = "/login";
  }

  return (
    <>
      {userStrapiData && (
        <Section>

          <div className="account-info">
            <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"></img>
            <h1>{userStrapiData.username}</h1>
            <div className="logout-buttons">
              <DefaultButton onClick={() => { logout() }}>Log out</DefaultButton>
            </div>
          </div>

          <div className="event-tickets-wrap">
            <LargeCardList>
              {console.log(userStrapiData?.registeredEvents)}
              {userStrapiData?.registeredEvents?.map((card, index) => (
                <div key={index}>
                  <LargeCardDesktop
                    isTicket={true}
                    isEvent={true}
                    title={card.attributes.title}
                    description={card.attributes.description}
                    address={card.attributes.location}
                    ticketDate={card.attributes.date}
                    ticketTime={`${card.attributes.startTime} - ${card.attributes.endTime}`}
                    rating={card.attributes.numStars}
                    category={card.attributes.tags}
                    imgSrc={card.image.data || card.image.url}
                    imgAltText={card.image.alternativeText}
                    barcodeUID={card.attributes.barcodeUID}

                    isRegisterable={card.attributes.isRegisterable}
                    isFull={card.attributes.isFull}
                    isAvail={card.attributes.isAvailable}
                    hoursOfOperation={card.attributes.hoursOfOperation}
                  ></LargeCardDesktop>
                </div>
              ))}
            </LargeCardList>
          </div>

          <div className="event-tickets-wrap-mobile">
            <LargeCardList>
              {console.log(userStrapiData?.registeredEvents)}
              {userStrapiData?.registeredEvents?.map((card, index) => (
                <div key={index}>
                  <LargeCardMobile
                    isTicket={true}
                    isEvent={true}
                    title={card.attributes.title}
                    description={card.attributes.description}
                    address={card.attributes.location}
                    ticketDate={card.attributes.date}
                    ticketTime={`${card.attributes.startTime} - ${card.attributes.endTime}`}
                    rating={card.attributes.numStars}
                    category={card.attributes.tags}
                    imgSrc={card.image.data || card.image.url}
                    imgAltText={card.image.alternativeText}
                    barcodeUID={card.attributes.barcodeUID}

                    isRegisterable={card.attributes.isRegisterable}
                    isFull={card.attributes.isFull}
                    isAvail={card.attributes.isAvailable}
                    hoursOfOperation={card.attributes.hoursOfOperation}
                  ></LargeCardMobile>
                </div>
              ))}
            </LargeCardList>
          </div>

        </Section>


      )}

      <style jsx>
        {`
          .account-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;
            height: 300px;
            padding: 20px;
          }

          .account-info img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
          }

          .account-info h1 {
            color: black;
            font-size: 40px;
            font-weight: bold;
          }

          .logout-buttons {
            margin: 20px;
          }

          .event-ticket-wrap {
            background-color: grey;
            height: 100%;
          }

          .event-tickets {
            display: flex;
            flex-direction: column-reverse;
            background-color: black;

            padding-left: 100px;
            padding-right: 100px;
            border-color: grey;
            border-style: solid;
            border-width: 2px;
          }

          .event-tickets-wrap-mobile {
            display: none;

          }

          @media screen and (max-width: 600px) {
            .event-tickets-wrap {
            display: none;
          }

          .event-tickets-wrap-mobile {
            display: flex;
            justify-content: center;
          }
          }


        `}
      </style>
    </>
  );
}
