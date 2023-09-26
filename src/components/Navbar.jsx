import React from "react";
import Image from "next/image"

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileHamburgerMenu from "./MobileHamburgerMenu";

export default function Navbar() {
	//html
	return (
		<>
			{/* html */}
			<div className="header">

				<div className="linconLogo">
					<Image src="headerIcons.svg" width={200} height={150} alt="Discover Lincon on Facebook, Instagram, Twitter"
						style={"max-width: 10px;"}
					/>
				</div>
				<div className="header-links">
					<a href="./homepage">Home</a>
					<a href="./search">Search</a>
					<a href="./events-attractions">Upcoming Events</a>
					<a href="./events-attractions">Attractions</a>
					<a href="./business-service">Businesses & Services</a>
					<a href="./profile">Profile</a>
				</div>

				<div className="mobileNavShow">
				<FontAwesomeIcon icon={faBars} />
					<div className="mobilenav">
					<MobileHamburgerMenu></MobileHamburgerMenu>


						
					</div>
					
				</div>
			</div>

			{/* styles */}
			<style jsx>{`
         
          .header {
            display: flex;
            width: 100%;
            height: 95px;
            background-color: #005731;
            overflow: hidden;
            justify-content: space-between;
          }

          .logo {
            float: left;
            width: 300px;
            display: center;
          }

          .header-links {
            float: right;
            padding: 0px 25px;
          }

          .header-links a {
            float: left;
            color: white;
            padding: 30px 16px;
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
		}

		{/* Mobile view */}
		{/* TODO: fix jank */}
	  @media screen and (max-width:500px) {
		
		.header-links {
			display: none;
		}
		.mobileNavShow {
			display: inline;
		}

		.mobileNavShow:hover {
			.mobilenav {
				display: inline;
			}
		}


		.mobileNav:hover {
			.mobilenav {
				display: block;
			}
		}
		.header {
			height: auto;
		}
	  }

        
      `}</style>
		</>
	);
}
