import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import DefaultButton from "./DefaultButton";
import {categoryColors} from "../../server/data";


/**
 * Children is the icon you want to put under the title. 
 * You will control the size, Recommended size 20x20
 * 
 * imgUrl: the url of the image of the event or what not ex. /local.svg or https://......
 * @param {*} param0 
 * @returns 
 */
export default function SmallCard({
	title = "Title",
	category = "restaurant",
	imgSrc = "https://travelforfoodhub.com/wp-content/uploads/2023/05/Best-Wine-Regions-in-Europe.jpg",
	scrollLink,
	scrollLinkMobile,
	children
}) {


	// default to selecting other tag
	if (categoryColors[category] == undefined) {
		category = "Other";
	}


	return (
		<>
			<div className="small-card-mobile">
				<div className="image-container"></div>

				<div className="card-information-wrap">
					<div className="large-info-wrap">
						<div className="large-info-wrap-left">
							<h4 className="title">{title}</h4>
						</div>

						<div className="large-info-wrap-right">

							<div className="title-wrap">
								<div className="icon">
									{children}
								</div>
								<div className="category-tag">
									<h4>{category}</h4>
								</div>
							</div>

						</div>
					</div>

				</div>


				<div className="action-icon-wrap">

					<div className="action-icon">
						<FontAwesomeIcon icon={faLocationArrow} />
					</div>

					<div>
						<DefaultButton className="blank" onClick={() => {
							try {
								scrollLink.scrollIntoView({ behavior: "smooth", block: "center" });
								scrollLinkMobile.scrollIntoView({ behavior: "smooth", block: "center" });
							}
							catch (e) {
								console.log("SCROLL FAIL")
							}

						}}>
							<div className="action-icon">
								{/* <FontAwesomeIcon icon={faArrowUpFromBracket} /> */}
								More
							</div>
						</DefaultButton>
					</div>

				</div>
			</div>

			<style jsx>
				{`	
				.small-card-mobile {
					display: flex;
					align-items: center;
					justify-content: space-between;
					
					min-height: 90px;
					width: 320px;
					padding-right: 10px;

					box-shadow: var(--shadow-box-small-card);
					background-color: #FFFFFF;
					border-radius: 10px;
				}

				.image-container {
					width: 160px;
					height: 65px;
					background-position: center center;
					background-repeat: no-repeat;
					background-image: url(${imgSrc});
					background-size: cover;
					border-radius: 5px;
					border: 1px solid #B7B7B7;
					margin-left: 10px;
				}

				.card-information-wrap {
					display: flex;
					flex-direction: column;
					padding: 10px 15px;
					width: 100%;
				}

				.category-tag {
					border-radius: var(--border-radius-pill);
					color: white;
					background-color: ${categoryColors[category]};
					padding: 5px;
					
					font-weight: 500;
					font-family: var(--font-roboto);
					font-size: var(--font-size-body-S);
					text-align: center;

					width: fit-content;
					min-width: 60px;
				}

				.title {
					font-family: var(--font-calps);
					font-size: var(--font-size-body-L);
					font-weight: 500;
					text-align: left;
				}


				.action-icon-wrap {
					align-self: center;
					justify-self: end;
					
				}
				.action-icon {
					margin: 0px 10px 10px 0px;
					color: ${categoryColors[category]};
				}

				.action-icon:hover {
					transform: scale(1.1);
				}

				.title-wrap {
					display: flex;
					align-items: center;
				}

				.icon {
					margin-right: 10px;
				}

				@media screen and (max-width: 365px) {
					.small-card-mobile {
						width: 80vw;
					}

				}

				`}
			</style>
		</>
	);
}
