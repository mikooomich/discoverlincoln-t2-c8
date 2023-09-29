import React from "react";
import Image from "next/image";

import { useState } from "react";
import { faBars, faUser, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileHamburgerMenu from "./MobileHamburgerMenu";
import DefaultButton from "./DefaultButton";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  //html
  return (
    <>
      {/* html */}
      <div className="header-wrap">
        <div className="header">
          <div className="linconLogo">
            <Image
              src="headerIcons.svg"
              width={100}
              height={95}
              alt="Discover Lincon on Facebook, Instagram, Twitter"
              style={"max-width: 10px;"}
            />
          </div>
          <div className="header-links">
            {/* Idk how you guys want to handle these links */}
            {/* <DefaultButton bgColor="transparent" padding="25px">
							<FontAwesomeIcon icon={faHouse} />
						</DefaultButton>

						<DefaultButton isLink={true}>Search</DefaultButton>
						<DefaultButton isLink={true}>Upcoming Events</DefaultButton>
						<DefaultButton isLink={true}>Attractions</DefaultButton>
						<DefaultButton isLink={true}>Businesses & Service</DefaultButton> */}

            <a href="./homepage">Homepage</a>
            <a href="./search">Search</a>
            <a href="./events-attractions">Upcoming Events</a>
            <a href="./events-attractions">Attractions</a>
            <a href="./business-service">Businesses & Services</a>

            <DefaultButton bgColor="transparent" padding="14px"isLink={true} href="./profile">
              <FontAwesomeIcon icon={faUser} />
            </DefaultButton>
          </div>

          <div
            className="mobileNavShow"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div className={isNavExpanded ? "nav-expanded" : "nav-closed"}>
          <MobileHamburgerMenu></MobileHamburgerMenu>
        </div>
      </div>

      {/* styles */}
      <style jsx>{`
        .header-wrap {
          display: flex;
          flex-direction: column;
        }
        .header {
          display: flex;
          width: 100%;
          height: 95px;
          background-color: #005731;
          overflow: hidden;
          justify-content: space-between;
          padding: 20px;
        }

        .logo {
          width: 300px;
          display: center;
        }

        .header-links {
          float: right;
          margin-right: 20px;
        }

        .header-links * {
          float: left;
          color: white;
          padding: 16px 16px;
        }

        .header-links a:hover {
          text-decoration: underline;
          transform: scale(1.1);
          transition: 0.3s;
        }
        .linconLogo {
          display: flex;
          margin-left: 20px;
        }

        .mobilenav {
          display: none;
        }

        .mobileNavShow {
          font-size: 20pt;
          color: white;
          display: none;
          margin-top: 10px;
          margin-right: 10px;
        }

        .nav-closed {
          display: none;
        }

         {
          /* Mobile view */
        }
         {
          /* TODO: fix jank */
        }
        @media screen and (max-width: 845px) {
          .header-links {
            display: none;
          }
          .mobileNavShow {
            display: inline;
          }

          .nav-expanded {
            display: inline;
          }

          .nav-closed {
            display: none;
          }

          .header {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
