import React from 'react'
import TextInput from './TextInput'

export default function Footer() {
  //code

	//html
	return (
		<>
			{/* html */}
			<div className="footer">
                <div className="footer-logos"> 
                    <img src="https://en.expensereduction.com/wp-content/uploads/2018/02/logo-placeholder.png" className="logo"></img>
                </div>
                    <div className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">Search</a>
                        <a href="#">Upcoming Events</a>
                        <a href="#">Attractions</a>
                        <a href="#">Businesses & Services</a>
                        <a href="#">Profile</a>
                    </div>
                    <div className="footer-subscription">
                        <h2 className="subscribe-text">Subscribe to Town of Lincoln</h2>
                        <div className="subscription-inputs">
                            <TextInput type="text" className="email-input" placeholder="Enter email"></TextInput>
                            <button type="button" className="button-style">Submit</button>
                        </div>
                    </div>
            </div>

      {/* styles */}
      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: row;
          justify-items: stretch;
          width: 100%;
          height: 95px;
          background-color: #005731;
          overflow: hidden;
          justify-content: space-between;
          padding-left: 20px;
          padding-right: 20px;
        }

        .logo {
          float: left;
          width: 300px;
          display: center;
        }

        .footer-wrap {
          display: flex;
          flex-direction: row;
        }

        .footer-links {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .footer-links a {
          float: left;
          color: white;
          padding: 10px;
          font-size: 15px;
        }

        .footer-links a:hover {
          text-decoration: underline;
          transform: scale(1.05);
          transition: 0.3s;
        }

        .footer-subscription {
          display: flex;
          flex-direction: column;
        }

        .subscription-inputs {
          display: flex;
          flex-direction: row;
          padding: 5px;
          gap: 5px;
        }

                    .subscribe-text{
                        font-weight: bold;
                    }
                    .button-style{
                        display: flex;
                        width: 81px;
                        height: 30px;
                        padding: 3px 15px;
                        gap: 10px;
                        flex-shrink: 0;
                        background: var(--TOPOGRAPHIC-GREEN, #00A62E);
                        backdrop-filter: blur(2px);
                        color: white;
                    }

        .subscribe-text {
          color: white;
          padding: 5px;
          font-size: 15px;
        }
      `}</style>
    </>
  );
}
