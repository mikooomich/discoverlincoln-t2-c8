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
            <h2 className="address">101 Address Street, Lincoln, ON</h2>
          </div>
          <div className="description-wrap">
            <div className="description-text">
              <p>This is an example descirption.</p>
            </div>
            <div className="description2-text">
              <p></p>
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
          }

          .title{
            font-family: --font-calps;
            font-size: --font-size-header-XS;
            font-weight: 900;
            

          }

          .description-wrap {
            display: flex;
            flex-direction: row;
          }

          .description-text {
          }
        
      `}</style>
    </>
  );
}
