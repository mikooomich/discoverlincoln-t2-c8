import React from "react";

export default function LargeCardDesktop({categoryColor} /*props*/) {
  //code

  //html
  return (
    <>
      <div className="large-card-desktop">
        <div className="image-container">
        </div>
        <div className="card-information-wrap">
          <div className="large-info-wrap">
            <h1 className="title">Lincoln Vineyards</h1>
            <div className="address-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="26" viewBox="0 0 17 26" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.20434 1.19319C6.80537 -0.423801 10.0025 -0.395538 12.5791 1.26722C15.1304 2.96385 16.681 5.99182 16.6666 9.24908C16.6072 12.485 14.9445 15.5267 12.8661 17.8781C11.6665 19.2414 10.3246 20.4469 8.86772 21.4699C8.71768 21.5628 8.55332 21.6249 8.38277 21.6533C8.21862 21.6458 8.05876 21.5939 7.91761 21.5023C5.6934 19.9651 3.74209 18.0029 2.15755 15.7101C0.831658 13.7962 0.0783763 11.4839 1.38302e-06 9.08728C-0.00171986 5.82378 1.6033 2.81018 4.20434 1.19319ZM5.70678 10.438C6.14431 11.592 7.17705 12.3448 8.3228 12.3448C9.0734 12.3506 9.79493 12.0289 10.3266 11.4515C10.8583 10.874 11.156 10.0888 11.1533 9.27072C11.1573 8.02203 10.4703 6.89386 9.41288 6.41298C8.3555 5.9321 7.13641 6.19336 6.32483 7.07478C5.51324 7.95619 5.26926 9.28389 5.70678 10.438Z" fill="black"/>
                <ellipse opacity="0.4" cx="8.33132" cy="24.2005" rx="5.95242" ry="1.27372" fill="black"/>
              </svg>
              <h2 className="address">101 Address Street, Lincoln, ON</h2>
            </div>
          </div>
          <div className="description-wrap">
            <div className="description-text">
              <p>Explore endless fields of vines and grapes, with twists and turns to your hearts content. Fun for the whole family. Enjoy a warm, sunny day, in the relaxing yards of vine. Hurry up! Space is limited! <br/>
              <br/>Our Vineyards are open to the public between April 23 and November 4th. Please note that weather circumstances may change, please dress accordingly and prepare for the weather. We are not responsible for lost belongings.</p>
            </div>
            <div className="border-line"></div>
            <div className="description2-text">
              <h1 className="hours-title">Hours of Operation:</h1>
              <p className="hours-description">Monday: 11am - 6pm<br/>
                Tuesday: 11am - 6pm<br/>
                Wednesday: 11am - 6pm<br/>
                Thursday: 11am - 6pm<br/>
                Friday: 11am - 9pm<br/>
                Saturday: 9am - 9pm<br/>
                Sunday: 9am - 9pm
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* styles */}
      <style jsx>{`
          .large-card-desktop {
            display: flex;
            flex-direction: row;
            max-width: 1200px;
            max-height: 408px;
            border: 2px solid black;
            overflow: hidden;
          }

          .image-container{
            width: 519px;
            height: 408px;
            background-position: center center;
            background-repeat: no-repeat;
            background-image: url("https://travelforfoodhub.com/wp-content/uploads/2023/05/Best-Wine-Regions-in-Europe.jpg");
            background-size: cover;
          }

          .card-information-wrap {
            display: flex;
            flex-direction: column;
          }

          .large-info-wrap {
            display: flex;
            flex-direction: column;
            padding: 25px 0px 0px 30px;
          }

          .title{
            font-family: var(--font-calps);
            font-size: var(--font-size-header-XS);
            font-weight: 900;
          }

          .address-wrap{
            display: flex;
            flex-direction: row;
          }

          .address{
            padding-left: 5px;
            font-family: var(--font-roboto);
            font-size: var(--font-size-body-Mplus);
            font-weight: 400;
          }

          .description-wrap {
            display: flex;
            flex-direction: row;
            padding: 25px 20px 50px 30px;
            width: 700px;
          }

          .description-text {
            font-family: var(--font-roboto);
            font-size: var(--font-size-body-M);
            font-weight: 500;
            width: 400px;
            padding-right: 20px
          }

          .border-line{
            border-left: 1px solid grey;
            height: 215px;
          }

          .description2-text{
            padding-left: 30px;
          }

          .hours-title{
            font-family: var(--font-roboto);
            font-size: var(--font-size-body-Mplus);
            font-weight: 700;
            padding-bottom: 10px;
          }

          .hours-description{
            font-family: var(--font-roboto);
            font-size: var(--font-size-body-M);
            font-weight: 400;
            line-height: 2;
            padding-left: 30px;
          }

        
      `}</style>
    </>
  );
}
