import React from 'react'

export default function LargeCardDesktop({} /*props*/) {
	//code

	//html
	return (
		<>
			<div className="large-card-desktop">
                <img src="https://travelforfoodhub.com/wp-content/uploads/2023/05/Best-Wine-Regions-in-Europe.jpg" className="card-image"></img>
				<div className="card-information-wrap">
                    <div className="large-info-wrap">
                        <h1 className="location-title"></h1>
                    </div>
                    <div className="description-wrap">
                        <div className="description-text">
                            <p></p>
                        </div>
                        <div className="description2-text">
                            <p></p>
                        </div>
                    </div>
                </div>
			</div>

			{/* styles */}
			<style jsx>{`
				p {
                    .large-card-desktop{
                        display: flex;
                        flex-direction: row;
                    }

                    .card-image{

                    }

                    .card-information-wrap{
                        display: flex;
                        flex-direction: column;
                    }

                    .large-info-wrap{
                        display: flex;
                        flex-direction: column;
                    }

                    .description-wrap{
                        display: flex;
                        flex-direction: row;
                    }

                    .description-text{
                        
                    }
				}
			`}</style>
		</>
	)
}
