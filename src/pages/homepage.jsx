import React from 'react'

export default function homepage() {
  return (
    <>
        <div>
            <div class="landing-view">
                <div class="header">
                    <img src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" class="header-logo"></img>
                    <div class="header-links">
                        <a href="#">Home</a>
                        <a href="#">Search</a>
                        <a href="#">Upcoming Events</a>
                        <a href="#">Attractions</a>
                        <a href="#">Businesses & Services</a>
                        <a href="#">Profile</a>
                    </div>
                </div>
            </div>

        </div>
        <style jsx>{`
			{
                .landing-view{
                    display: flex;
                    flex-direction: 
                    background-color: #005731;
                }
				.header{
                    display: flex;
                    width: 100%;
                    height: 95px;
                    overflow: hidden;
                    justify-items: flex-start;

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
			}
		`}</style>
    </>

  )
}
