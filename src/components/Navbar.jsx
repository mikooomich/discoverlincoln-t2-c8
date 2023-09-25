import React from 'react'

export default function Navbar() {
	//html
	return (
		<>
			{/* html */}
			<div className="header">
                <img src="https://en.expensereduction.com/wp-content/uploads/2018/02/logo-placeholder.png" className="logo"></img>
                <div className="header-links">
                    <a href="#">Home</a>
                    <a href="#">Search</a>
                    <a href="#">Upcoming Events</a>
                    <a href="#">Attractions</a>
                    <a href="#">Businesses & Services</a>
                    <a href="#">Profile</a>
                </div>
            </div>

			{/* styles */}
			<style jsx>{`
				p {
                    .header{
                        display: flex;
                        width: 100%;
                        height: 95px;
                        background-color: #005731;
                        overflow: hidden;
                        justify-content: space-between;
                    }

                    .logo{
                        float: left;
                        width: 300px;
                        display: center;
                    }


                    .header-links{
                        float: right;
                        padding: 0px 25px;
                    }

                    .header-links a{
                        float: left;
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
