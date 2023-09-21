import React from 'react'

export default function homepage() {
  return (
    <>
        <div className="homepage">
            <div className="landing-view">
                <div className="header-1">
                    <img src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" className="header-logo"></img>
                    <div className="header-links">
                        <a href="#">Home</a>
                        <a href="#">Search</a>
                        <a href="#">Upcoming Events</a>
                        <a href="#">Attractions</a>
                        <a href="#">Businesses & Services</a>
                        <a href="#">Profile</a>
                    </div>
                </div>
                <div className="landing-view-greet">
                    <div className="greeting-frame">
                        <h1 className="discover-text">Discover</h1>
                        <h1 className="lincoln-text">LINCOLN</h1>
                        <p className="greeting-description-text">Welcome to the Town of Lincoln! The places you will go, and the sights you will see, may the rolling hills be in your favour.</p>
                        <div className="search-area">
                            <button className="see-lincoln">SEE LINCOLN</button>
                            <div className = "search-button-area">
                                <button className="search-button"></button>
                                <input type="text" className="search-input" placeholder="Search..."></input>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-events-wrap">
                        <h1 className="upcoming-events-subtitle">Upcoming Events</h1>
                        <div className="event-card-frame">
                            <h2>INSERT SMALL EVENT CARDS</h2>
                        </div>
                        <button className="see-all-events-button">SEE ALL</button>
                    </div>
                </div>
            </div>

            <div className="page-buttons">
                <img src="https://static01.nyt.com/images/2022/10/17/travel/00hours-milan-lede2/00hours-milan-lede2-mobileMasterAt3x.jpg" className="image-home"></img>
                <div className="text-and-buttons">
                    <p className="image-description">Nestled in the heart of Ontario's picturesque Niagara Region, Lincoln is a charming and vibrant community that often flies under the radar. Lincoln offers its own unique blend of natural beauty, rich history, and thriving agriculture. 

                    On a journey through Lincoln, you will uncover attractions, culture, and events that make it a hidden gem worth discovering</p>
                    <div className="buttons">
                        <button className="events-button">EVENTS</button>
                        <button className="attractions-button">ATTRACTIONS</button>
                        <button className="businesses-button">BUSINESSES</button>
                    </div>
                </div>
            </div>

        </div>
        <style jsx>{`

                .homepage{
                    display: flex;
                    flex-direction: column;
                }

                .landing-view{
                    display: flex;
                    flex-direction: column;
                    background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url("https://dg.imgix.net/does-alcohol-still-sober-you-igdnainm-en/landscape/does-alcohol-still-sober-you-igdnainm-d3b43138ff5a2cce0d3ff444cec97153.jpg?ts=1678406840&ixlib=rails-4.3.1&auto=format%2Ccompress&fit=min&w=700&h=394&dpr=2&ch=Width%2CDPR");
                    background-size: cover;
                }
				.header-1{
                    display: flex;
                    width: 100%;
                    height: 95px;
                    overflow: hidden;
                    justify-content: flex-start;
                }

                .header-logo{
                    width: 100px;
                    height: auto;
                }

                .header-links{
                    padding: 0px 25px;
                }

                .header-links a{
                    color: white;
                    padding: 30px 16px;
                }

                .header-links a:hover{
                    text-decoration: underline;
                    transform: scale(1.1);
                    transition: 0.3s;
                }

                .landing-view-greet{
                    display: flex;
                    flex-direction: rows;
                    height: 600px;
                    justify-content: flex-start;
                    align-items: center;
                }	

                .greeting-frame{
                    display: flex;
                    flex-flow: column wrap;
                    align-content: flex-start;
                    width: 1500px;
                    padding: 0px 200px 100px 150px;
                }
                
                
                .discover-text{
                    font-size: 75px;
                    font-family: var(--font-calps);
                    font-style: normal;
                    font-weight: 700;
                    line-height: 75.1%;
                    color: white;
                    padding-bottom: 10px;
                }

                .lincoln-text{
                    font-size: 125px;
                    font-family: var(--font-calps);
                    font-style: normal;
                    font-weight: 950;
                    line-height: 75.1%; /* 93.875px */
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    
                    color: white;
                }
                .greeting-description-text{
                    font-family: var(--font-roboto);
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24;
                    color: white;
                    width: 550px;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    line-height: 150%;
                    padding-top: 20px;
                    padding-bottom: 35px;
                }

                .search-area{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding: 0px px 0px 0px
                }

                .see-lincoln{
                    display: flex;
                    width: 120px;
                    height: 40px;
                    padding: 10px 5px 5px 16px;
                    background: #FFF;
                    gap: 10px;
                    backdrop-filter: blur(2px);
                    color: black;
                    font-family: var(--font-roboto);
                    font-size: 14px;
                    font-weight: 800;
                }

                .search-button-area{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    padding: 0px 0px 0px 20px;
                }

                .search-button{
                    background: var(--color-topographic-green);
                    width: 61.027px;
                    height: 40px;
                }

                .search-input{
                    width: auto;
                    height: 40px;
                }

                .upcoming-events-wrap{
                    display: flex;
                    flex-flow: column wrap;
                    align-content: flex-start;
                    width: 393px;
                    height: auto;
                }

                .upcoming-events-subtitle{
                    color: #FFF;
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    font-family: var(--font-roboto);
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 75.1%; /* 18.024px */
                }

                .events-card-frame{
                    width: 393px;
                    height: 429px;
                    background: rgb(220, 20, 60, 0.6);
                    padding: 18px 15px 0px 16px;
                    flex-direction: column;
                    justify-content: flex-end;
                    align-items: flex-start;
                    gap: 13px;
                    box-shadow: 3px 5px 4px 0px rgba(0, 0, 0, 0.35);
                    
                }

                .see-all-events-button{
                    display: flex;
                    width: 83px;
                    height: 34px;
                    padding: 7px 2px 2px 12px;
                    background: #FFF;
                    backdrop-filter: blur(2px);
                    color: black;
                    font-family: var(--font-roboto);
                    font-size: 16px;
                    font-weight: 800; 
                    align-self: flex-end;
                }
                .page-buttons{
                    display: flex;
                    flex-direction: row;
                    background: var(--color-elevated-green);
                    height: 348px;
                }

                .image-home{
                    height: 500px;
                    width: autoAddCss;
                }
                

                }
		`}</style>
    </>

  )
}
