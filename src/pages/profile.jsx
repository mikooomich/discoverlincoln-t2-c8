import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LargeCardList from "@/components/LargeCardList";
import LargeCardDesktop from "@/components/LargeCardDesktop";
import React, { useState, useEffect } from "react";

export default function Profile() {
  const [userStrapiData, setUserStrapiData] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const jwt = localStorage.getItem("jwt");

      const response = await fetch(
        "https://strapi.discoverlincoln-t2-c8.civiconnect.net/api/users/me?populate=registeredEvents.image",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      const userData = await response.json();
      setUserStrapiData(userData);
      console.log(userData);
    }
    getUserData();
  }, []);

  return (
    <>
      {userStrapiData && (
        <div className="profile-page">
          <div className="account-info">
            <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"></img>
            <h1>{userStrapiData.username}</h1>
          </div>
          <LargeCardList>
            {userStrapiData?.registeredEvents?.map((card, index) => (
              <li key={index}>
                <LargeCardDesktop
                  title={card.title}
                  address={card.location}
                  category={card.tags}
				  imgSrc={card.image.url}
                  description={card.description}
                  rating={card?.numStars}
                  isTicket={true}
                  isEvent={true}
                  ticketDate={card.date}
                  timeStart={card.startTime}
                  timeEnd={card.endTime}
                ></LargeCardDesktop>
              </li>
            ))}
          </LargeCardList>
        </div>
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
        `}
      </style>
    </>
  );
}
