import React from 'react'
import DefaultButton from '@/components/DefaultButton'
import BusinessCard from '@/components/BusinessCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CardCarousel from '@/components/CardCarousel'
import LargeCardMobile from '@/components/LargeCardMobile'

import { faWindowRestore, faCircleInfo, faTruckMedical, faStore, faUtensils, faCarrot, faStrikethrough, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
				background-size: 110% auto;
				background-repeat: no-repeat;
				background-position: center;
				
				{/* filter: blur(10px); */}

				width: 100%;
				padding: 80px 40px 80px 80px;
				color: white;
			}

			.banner * {
				text-shadow: var(--shadow-box-massive-card);
				font-family: var(--font-calps)
			}

			h1 {
				font-size: var(--font-size-header-XL);
				font-weight: var(--font-weight-titles);
			}
			h3 {
				font-size: var(--font-size-header-S);
			}
			.bannerTxt p {
				font-size: var(--font-size-body-L);
				margin-top: 20px;
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

			.cardPlaceholder {
				width: 360px;
				height: 360px;
				background-color: grey;
			}



			{/* Buisness cards */}
			.buisnessCardBox {
				display: flex;
				justify-content: space-around;
			}


			{/* p {
				font-size: 16px;
			} */}
			.cardBodyTxt {
				margin-left: 20px;
			}

			{/* .card1 {

			} */}
			.card2 {
				{/* lower card */}
				position: relative;
				top: -30px;
				right: -120px;	
			}

			{/* start This is all for the partners card */}
			.partnersCard {
				display: flex;
				justify-content: space-between;
			}

			.iconsBox {
				position: relative;
				bottom: 40px;
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
		`}
			</style>

			<div>
				<Navbar></Navbar>

				<div className='banner'>
					<div className='bannerTxt'>
						<h1>Explore Local</h1>
						<h3>This destination lends itself to exploration, slow travel, and serendipitous discovery</h3>
						<p>– Lincoln Destination Tourism Strategy and Action Plan 2020 – 2025</p>
					</div>
				</div>
				<div id="buisnessPsudoBody">
					<div className='selectionsContent'>
						{/* <h3 className='selectionsTitle'>Our Fine Selections</h3> */}
						{/* placeholder, steal the ones used on home page and modify it? */}

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
							<span className='card1'>
								<BusinessCard theme='white' title="Need Information?" isAltOrientation="true" icons={faCircleInfo}>
									<p>Have a question about your ventures? Visit
										an information center or
										<DefaultButton isLink="true"> Click here </DefaultButton>
										to view a map of our in person information centers.</p>
								</BusinessCard>
							</span>


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
							<span className='card1'>
								<BusinessCard theme='black' title="Emergency Services" icons={faTruckMedical}>
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
										555-555-555
										<br />
										555-555-555
										<br />
										555-555-555

									</p>
								</BusinessCard>
							</span>

							<span className='card2'>
								<BusinessCard theme='white' title="Other Useful Contacts" icons={faStore}>
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
										555-555-555
										<br />
										555-555-555
										<br />
										555-555-555
										<br />
										555-555-555
										<br />
										555-555-555
									</p>
								</BusinessCard>
							</span>
						</div>




					</div>
				</div>
				<Footer></Footer>
			</div >
		</>

	)
}