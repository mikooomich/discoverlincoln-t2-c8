import React from 'react'

/**
 * bgColour = sucess creates a green toast, err (or anything else) will create a red toast
 * type = "toast" for desktop toast, "toast toastMobile" = mobile toast
 */
export default function Toast({bgColor = "err", accentColor, fontSize, clasName: type = "toast", text = "Placeholder"}) {

        if (bgColor == "success") {
                bgColor = "#87C259";
                if (accentColor == undefined) {
                        accentColor = "#7FFB74";
                }
        }

        else { // default to error colours
                bgColor = "#FF7253";
                if (accentColor == undefined) {
                        accentColor = "#f00";
                }
        }

	return (
		<>
                <div className = {type}>
                        <div className='accent'></div>
                        <rect className='icon'></rect>
                        <p>{text}</p>
                        <button className='dismissBtn'>X</button>
                </div>


		<style jsx>
			{`
		
                        .toast {
                                background-color: ${bgColor};
                                width: 400px;
                                min-height: 100px;
                                margin: 5px 0px;


                                display: flex;
                                align-items: center;
                                justify-content: start;
                                

                                font-size: var(--font-size-body-L);
                                font-family: var(--font-roboto);
                        }
                        .toast:hover {
                                filter: brightness(110%);
                        }

                        .toast * {
                                margin-right: 10px;
                        }
                        .toast div { 
                                /*for override accent height*/
                                align-self: stretch;
                        }

                        .toast p {
                                width: 100%;
                        }

                        /* mobile styling is hidden by default */
                        .toastMobile {
                                display: none;
                                width: 100%;
                        }



                        .accent {
                                height: auto;
                                width: 15px;
                                background-color: ${accentColor};
                                border-radius: 0px 8px 8px 0px;
                        }

                        .icon {
                                width: 40px;
                                height: 40px;
                                background-color: black;
                        }

                        .dismissBtn {
                                padding: 0px 16px;
                                text-align: center;
                                background-color: #f00;
                                font-weight:bolder;
                                font-size: var(--font-size-body-M);
                                border-radius: 0px 0px 10px 10px;
                                
                                align-self: start;  
                        }

                        .dismissBtn:hover {
                                filter: brightness(70%);
                        }

                       
                        {/* reveal mobile toast styling, hide desktop */}
                        @media only screen and (max-width: 500px){
                                .toast {
                                        /* width: 100%; */
                                        display: none;
                                } 
                                .toastMobile {
                                        display: flex;
                                        width: 100%;
                                }
                        }
			`}</style>
		</>
	)
}
