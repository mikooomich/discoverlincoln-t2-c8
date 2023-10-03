import React from "react";
import Image from "next/image";

import { useState } from "react";
import { faBars, faUser, faHouse, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileHamburgerMenu from "./MobileHamburgerMenu";
import Link from "next/link";

export default function Navbar({ isHomepage = false }) {
	const [isNavExpanded, setIsNavExpanded] = useState(false);


	return (
		<>
			{/* html */}
			<div className="header-wrap" >
				<div className="header">

					<div className="linconLogo">
						<Link href="./homepage">
							{/* home page uses different icon */}
							{!isHomepage ? <Image src="headerIcons.svg" width={100} height={95} alt="Discover Lincon" />
								:
								<div className="header-logo">
									<Image src="logoIcon.svg" width={60} height={60} alt="Lincon logo" />
								</div>
							}
						</Link>
					</div>

					<div className="header-links">
						<div><Link href="./homepage">Homepage</Link></div>
						<div><Link href="./search">Search</Link></div>
						<div><Link href="./events">Upcoming Events</Link></div>
						<div><Link href="./attractions">Attractions</Link></div>
						<div><Link href="./business-service">Businesses & Services</Link></div>

						<div>
							<Link href="./profile">
								<FontAwesomeIcon icon={faUser} style={{ marginTop: "-5px", color: "white", fontSize: "25px" }} />
							</Link>
						</div>
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
					<MobileHamburgerMenu isHomepage={isHomepage}></MobileHamburgerMenu>
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
          overflow: hidden;
          justify-content: space-between;
          padding: 20px;

			{/* homepage overrides */}
		  background-color: ${!isHomepage || isNavExpanded ? "var(--color-elevated-green)" : "transparent"};

		  position: ${!isHomepage ? "default" : "absolute"};
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

		.header-links *:hover{
			text-decoration: underline;
			transform: scale(1.1);
			transition: 0.3s;
        }

        .linconLogo {
          display: flex;
		  align-items: center;
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
