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
			font-size: var(--font-size-header-L);
		}
		h3 {
			font-size: var(--font-size-header-XS);
		}
		p {
			font-size: var(--font-size-body-L);
		}
           
        
        `}



			</style>


			<div id="buisnessPsudoBody">
				<div className='banner'>
					<h1>Explore Local</h1>
					<h3>This destination lends itself to exploration, slow travel, and serendipitous discovery</h3>

					<p>– Lincoln Destination Tourism Strategy and Action Plan 2020 – 2025</p>

				</div>



				<div className='selectionsContent'>
					<h3>Our Fine Selections</h3>
					{/* placeholder, steal the ones used on home page and modify it? */}

				</div>


				<div className='cardStash'>


				</div>
			</div>
		</>

	)
}
