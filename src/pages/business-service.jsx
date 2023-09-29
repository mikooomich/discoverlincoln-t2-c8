import React from 'react'
import DefaultButton from '@/components/DefaultButton'
import BusinessCard from '@/components/BusinessCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CardCarousel from '@/components/CardCarousel'
import LargeCardMobile from '@/components/LargeCardMobile'

import { faWindowRestore, faCircleInfo, faTruckMedical, faStore, faUtensils, faCarrot, faStrikethrough, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from '@/components/Section'

export default function business() {
	return (
		<>
			<style jsx>
				{`
	
			#buisnessPsudoBody {
				margin: auto;
				margin-bottom: 80px;
				max-width: 1200px;
				display: flex;
				flex-direction: column;
			}

			{/* Titles */}
			.banner {
				background-image: url("/local.svg");
				background-color: #DFDFDF;
				background-size: 110%  auto;
				background-repeat: no-repeat;
				background-position: center;
				
				{/* filter: blur(10px); */}

				width: 100%;
				padding: 80px 40px 80px 80px;
				color: white;
			}

			.banner * {
				text-shadow: var(--shadow-box-massive-card);
				
			}

			h1 {
				font-size: var(--font-size-header-XL);
				font-weight: var(--font-weight-titles);
				font-family: var(--font-calps);
			}
			h3 {
				font-size: var(--font-size-header-S);
				font-family: var(--font-roboto);
				
			}
			.bannerTxt p {
				font-size: var(--font-size-body-L);
				margin-top: 20px;
				font-family: var(--font-roboto);
			}

			.bannerTxt {
				max-width: 700px;
			}


			
		

			.selectionsContent {
				margin-top: 50px;
				margin-bottom: 50px;
				display: flex;
				flex-direction: column;
				width: 100%;
				font-weight: var(--font-weight-titles);
			}

			{/* for card spacing */}
			li {
				margin: 20px;
			}

			.selectionsBtn {
				align-self: end;
			}


			{/* Buisness cards */}
			.buisnessCardBox {
				display: flex;
				justify-content: space-around;
				margin-left: -70px;
				margin-right: 60px;
			}

			.buisnessCardBoxMobile {
				width: 100%;
				display: none;
				flex-direction: column;
			}

			.buisnessCardBoxMobile-wrap {
				display: flex;
				justify-items: center;
			}

			.phoneNunbers {
				display: flex;
				margin-left: 30px;
			}

			
			.cardBodyTxt {
				margin-left: 5px;
			}

			{/* .card1 {

			} */}


			{/* start This is all for the partners card */}
			.partnersCard {
				display: flex;
				justify-content: space-between;
			}

			.iconsBox {
				position: relative;
				bottom: 40px;
				width: 0px;
			}
			.icon {
				font-size: 20pt;
				position: relative;
			}

			#icon1 {
				right:120px;
			}
			#icon2 {
				right:60px;
				bottom: 30px;
			}
			#icon3 {
				right:90px;
				bottom: 20px;
			}
			#icon4 {
				right:40px;
				bottom: 40px;
			}
			#icon5 {
				right:70px;
				bottom: 30px;
			}
			{/* end This is all for the partners card */}



			{/* mobile cards */}
			.card2 {
				{/* lower card */}
				position: relative;
				top: -30px;
				right: -120px;	
			}
			.card2M, .card1M {
				margin-bottom: 20px;
			}
			.card1M {
				align-self: end;
			}


			{/* Show "in between mobile and desktop" card layout */}
			@media screen and (max-width: 900px) {
				.buisnessCardBox {
					{/* display: none; */}
					flex-wrap: wrap;
					margin-left: 0px;
					margin-right: 0px;
				}
				.card2 {
					right: -40px;	
				}	
			}

			
			{/* Make banner smaller to fit */}
			@media screen and (max-width: 720px) {
				h1 {
					font-size: var(--font-size-header-S);
				}

				h3 {
					font-size: var(--font-size-body-L);
					font-weight: normal;
					margin-top: 15px;
				}

				.bannerTxt p {
					font-size: var(--font-size-body-M);
					margin-top: 20px;
				}

				.banner {
					padding: 20px;
					background-size: auto auto;
				}
			}

			{/* Mobile view */}
			@media screen and (max-width: 500px) {
				.selectionsContent {
					margin-top: 20px;
				}

				.buisnessCardBox {
					display: none;

				}
				.buisnessCardBoxMobile {
					display: flex;

				}
			}


			{/* ULtra-mobile view, kill card shifting */}
			@media screen and (max-width: 400px) {
				.card1M {
					align-self: start;
				}
			}


		`}
			</style>

			<div>
				

				<div className='banner'>
					<div className='bannerTxt'>
						<h1>Explore Local</h1>
						<h3>This destination lends itself to exploration, slow travel, and serendipitous discovery</h3>
						<p>– Lincoln Destination Tourism Strategy and Action Plan 2020 – 2025</p>
					</div>
				</div>
				{/* <div id="buisnessPsudoBody"> */}
				<Section usePadding={true}>
					<div className='selectionsContent'>
						<CardCarousel title="Our Fine Selections" alignTitle='end' singleLineDisplay={true}>
							<li>
								<LargeCardMobile></LargeCardMobile>
							</li>
							<li>
								<LargeCardMobile></LargeCardMobile>
							</li>
							<li>
								<LargeCardMobile></LargeCardMobile>
							</li>
							<li>
								<LargeCardMobile></LargeCardMobile>
							</li>
						</CardCarousel>

						<div className='selectionsBtn'>
							<DefaultButton>
								{"<---"}
							</DefaultButton>
							<DefaultButton>
								{"--->"}
							</DefaultButton>
						</div>
					</div>


					<div className='buisnessCardBox'>
						<div>
							<div className='card1'>
								<BusinessCard theme='white' title="Need Information?" isAltOrientation="true" icons={faCircleInfo}>
									<p>Have a question about your ventures? Visit
										an information center or
										<DefaultButton isLink="true"> Click here </DefaultButton>
										to view a map of our in person information centers.</p>
								</BusinessCard>
							</div>


							<span className='card2'>
								<BusinessCard theme='black' title="Our Partners" isAltOrientation={true} icons={null}>
									<div className='partnersCard'>
										<p>
											Megasoft
											<br />
											Months Inn
											<br />
											Burger Queen
											<br />
											Rotten Potatoes
											<br />
											SUNGSAM
										</p>

										<div className='iconsBox'>
											<div id='icon1' className='icon'>
												<FontAwesomeIcon icon={faUtensils} />
											</div>
											<div id='icon2' className='icon'>
												<FontAwesomeIcon icon={faWindowRestore} />
											</div>

											<div id='icon3' className='icon'>
												<FontAwesomeIcon icon={faCarrot} />
											</div>

											<div id='icon4' className='icon'>
												<FontAwesomeIcon icon={faStrikethrough} />
											</div>

											<div id='icon5' className='icon'>
												<FontAwesomeIcon icon={faCrown} />
											</div>
										</div>
									</div>



								</BusinessCard>
							</span>

						</div>

						<div>
							<div className='card1'>
								<BusinessCard theme='black' title="Emergency Services" icons={faTruckMedical}>
									<div className='phoneNunbers'>
									<p>
										Emergency
										<br />
										Police
										<br />
										Fire
										<br />
										Roadside
										<br />
										Assistance
									</p>
									<p className='cardBodyTxt'>
										911
										<br />
										555-555
										<br />
										555-555
										<br />
										555-555

									</p>
									</div>
								</BusinessCard>
							</div>

							<div className='card2'>
								<BusinessCard theme='white' title="Other Useful Contacts" icons={faStore}>
									<div className='phoneNunbers'>
									<p>
										City Hall
										<br />
										Ontario Parks
										<br />
										Vineland
										<br />
										Support Line
										<br />
										Weather Info
									</p>
									<p className='cardBodyTxt'>
										555-555
										<br />
										555-555
										<br />
										555-555
										<br />
										555-555
										<br />
										555-555
									</p>
									</div>
								</BusinessCard>
							</div>
						</div>
					</div>

				</Section>
				<Section usePadding={false}>
					<div className='buisnessCardBoxMobile-wrap'>
						<div className='buisnessCardBoxMobile'>

							<div className='card1M'>
								<BusinessCard theme='white' title="Need Information?" isAltOrientation={true} icons={faCircleInfo}>
									<p>Have a question about your ventures? Visit
										an information center or
										<DefaultButton isLink="true"> Click here </DefaultButton>
										to view a map of our in person information centers.</p>
								</BusinessCard>
							</div>


							<span className='card2M'>
								<BusinessCard theme='black' title="Our Partners" isAltOrientation={true} icons={null}>
									<div className='partnersCard'>
										<p>
											Megasoft
											<br />
											Months Inn
											<br />
											Burger Queen
											<br />
											Rotten Potatoes
											<br />
											SUNGSAM
										</p>

										<div className='iconsBox'>
											<div id='icon1' className='icon'>
												<FontAwesomeIcon icon={faUtensils} />
											</div>
											<div id='icon2' className='icon'>
												<FontAwesomeIcon icon={faWindowRestore} />
											</div>

											<div id='icon3' className='icon'>
												<FontAwesomeIcon icon={faCarrot} />
											</div>

											<div id='icon4' className='icon'>
												<FontAwesomeIcon icon={faStrikethrough} />
											</div>

											<div id='icon5' className='icon'>
												<FontAwesomeIcon icon={faCrown} />
											</div>
										</div>
									</div>
								</BusinessCard>
							</span>


							<div className='card1M'>
								<BusinessCard theme='white' title="Emergency Services" icons={faTruckMedical}>
									<p>
										Emergency
										<br />
										Police
										<br />
										Fire
										<br />
										Roadside
										<br />
										Assistance
									</p>
									<p className='cardBodyTxt'>
										911
										<br />
										555-555
										<br />
										555-555
										<br />
										555-555

									</p>
								</BusinessCard>
							</div>

							<div className='card2M'>
								<BusinessCard theme='black' title="Other Useful Contacts" icons={faStore}>
									<p>
										City Hall
										<br />
										Ontario Parks
										<br />
										Vineland
										<br />
										Support Line
										<br />
										Weather Info
									</p>
									<p className='cardBodyTxt'>
										555-555
										<br />
										555-555
										<br />
										555-555
										<br />
										555-555
										<br />
										555-555
									</p>
								</BusinessCard>
							</div>

						</div>

					</div>
				</Section>

				
			</div >
		</>

	)
}
