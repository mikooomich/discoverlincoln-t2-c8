import React from "react";
import DefaultButton from "../components/DefaultButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LargeCardDesktop from "@/components/LargeCardDesktop";
import LargeCardMobile from "@/components/LargeCardMobile";
import LargeCardList from "@/components/LargeCardList";
import MapCard from "@/components/MapCard";

export default function EventsAndAttractions() {
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

          .mapPlaceholder {
            outline: #000000 solid 1px;
            background-color: rgba(244,112,180,0.11);
            min-height: 400px;
            width:100%;
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
          .cards-mobile{
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

          .offerings-text{
            font-family: var(--font-calps);
            font-size: var(--font-size-header-M);
            font-weight: var(--font-weight-titles);
          }

          h2 {
            font-size: var(--font-size-header-S);
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

          @media screen and (max-width: 550px) {
            /* Mobile view. Map gets thrown to bottom, collaps */
            .map {
              order: 1;
              margin: 20px auto;
            }

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

            

            .cards-desktop{
              display: none;
            }

            .cards-mobile{
              display: flex;
              flex-direction: column;

            nav ul {
              height: 500px;
              width: 400px;
              background-color: rgba(0, 255, 255, 0.227);
            }
          }
        `}
      </style>
      <Navbar></Navbar>

      <div className="psudoBody">
        <div className="iconBackdrop"></div>

        <div className="maincontent">
          <div className="titleBlock">
            <h1>Upcomming Events</h1>
            <p>There is always something around the corner</p>
          </div>

          <MapCard>
            <div className="mapPlaceholder">Map goes here</div>
          </MapCard>

          <div className="offerings">
            <h1 className="offerings-text">All Offerings</h1>

            {/* scrollable offerings */}
            <div className="cards-desktop">
              <LargeCardList>
                <LargeCardDesktop></LargeCardDesktop>
                <LargeCardDesktop></LargeCardDesktop>
                <LargeCardDesktop></LargeCardDesktop>
              </LargeCardList>
            </div>
            <div className="cards-mobile">
              <LargeCardList>
                <LargeCardMobile></LargeCardMobile>
                <LargeCardMobile></LargeCardMobile>
                <LargeCardMobile></LargeCardMobile>
              </LargeCardList>
            </div>

            <div className="mobileOfferings">
              <div id="mobileOfferingsTitles">
                <h2>All Offerings</h2>
                <DefaultButton text={"Browse Events"}></DefaultButton>
              </div>

              {/* scrollable offerings */}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
