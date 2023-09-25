import React from 'react'
import DefaultButton from '@/components/DefaultButton'


export default function checkout() {
	return (
		<>
			<style jsx>
				{`
	
        	#buisnessPsudoBody {
                        margin: auto;
                        max-width: 1200px;
                }


		.banner {
			background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Golden_Delicious_apples.jpg/500px-Golden_Delicious_apples.jpg");
			background-color: #DFDFDF;
			background-size: contain;
			{/* filter: blur(10px); */}

			width: 100%;
			padding: 20px 40px 60px 80px;
			color: white;
		}

	

		h1 {
			font-size: var(--font-size-header-XL);
			font-weight: var(--font-weight-titles);
			font-family: var(--font-calps)
		}
		h3 {
			font-size: var(--font-size-header-S);
			font-family: var(--font-calps)
		}
		p {
			font-size: var(--font-size-body-L);
			font-family: var(--font-calps)
		}

		.selectionsTitle {
			align-self: end;

		}
           

		.selectionsContent {
			margin-top: 50px;
			margin-bottom: 50px;
			display: flex;
			flex-direction: column;
			width: 100%;
			font-weight: var(--font-weight-titles);
		}

		.cardCarousel {
	
		}
		li {
			margin: 20px;
		}

		ul {
			display: flex;
			overflow-x:scroll;
		}
		.cardPlaceholder {
			width: 360px;
			height: 360px;
			background-color: grey;
		}

		.buisnessCardBox {

		}


        `}

			</style>

			<div>
				<div className='banner'>
					<h1>Explore Local</h1>
					<h3>This destination lends itself to exploration, slow travel, and serendipitous discovery</h3>

					<p>– Lincoln Destination Tourism Strategy and Action Plan 2020 – 2025</p>


				</div>
				<div id="buisnessPsudoBody">
					<div className='selectionsContent'>
						<h3 className='selectionsTitle'>Our Fine Selections</h3>
						{/* placeholder, steal the ones used on home page and modify it? */}


						<ul className='cardCarousel'>
							<li>
								<div className='cardPlaceholder'></div>
							</li>
							<li>
								<div className='cardPlaceholder'></div>
							</li>
							<li>
								<div className='cardPlaceholder'></div>
							</li>
							<li>
								<div className='cardPlaceholder'></div>
							</li>

						</ul>


						<div className='selectionsTitle'>
							<DefaultButton children="<---"></DefaultButton>
							<DefaultButton children="--->"></DefaultButton>
						</div>
					</div>


					<div className='buisnessCardBox'>

					</div>
				</div>
			</div>
		</>

	)
}
