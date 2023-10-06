import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";


/**
 * Children is the icon you want to put under the title. 
 * You will control the size, Recommended size 20x20
 * 
 * imgUrl: the url of the image of the event or what not ex. /local.svg or https://......
 * @param {*} param0 
 * @returns 
 */
export default function SmallCard({
	title = "Title wha wah",
	category = "restaurant",
	imgSrc = "https://travelforfoodhub.com/wp-content/uploads/2023/05/Best-Wine-Regions-in-Europe.jpg",
	children
}) {

	const categoryColors = {
		restaurant: "orange",
		music: "purple",
		Other: "blue"
	};

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
							<h1 className="title">{title}</h1>
						</div>

						<div className="large-info-wrap-right">

							<div className="title-wrap">
								<div className="icon">
									{children}
								</div>
								<div className="category-tag">
									<h1>{category}</h1>
								</div>
							</div>

						</div>
					</div>

				</div>


				<div className="action-icon-wrap">

					<div>
						<FontAwesomeIcon icon={faLocationArrow} />
					</div>

					<div>
						<FontAwesomeIcon icon={faArrowUpFromBracket} />

					</div>

				</div>
			</div>

			<style jsx>{`	

			.small-card-mobile {
				display: flex;
				align-items: center;

				
				height: 90px;
				width: 320px;
				max-width: 320px;

				box-shadow: var(--shadow-box-massive-card);
				background-color: #FFFFFF;
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
				width:100%;
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
			}


			.action-icon-wrap {
				align-self: center;
				justify-self: end;
				
			}
			.action-icon-wrap div {
				margin: 0px 10px 10px 0px;
				color: ${categoryColors[category]};
			}

			.title-wrap {
				display: flex;
				align-items: center;
			}

			.icon {
				margin-right: 10px;
			}

			
		`}</style>
		</>
	);
}
