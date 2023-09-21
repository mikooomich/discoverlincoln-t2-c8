import React from 'react'

export default function login() {
  return (
        <>

        <style jsx>
        {`

                #mainContent {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                }

                .tooltip {
                        font-family: var(--font-roboto);
                        font-size: var(-font-size-body-L); 
                }


                /* containers */
                .logindiv {
                        display: flex;
                        flex-direction: column;
                        max-width: 500px;
                        align-items: center;

                        padding: 40px 40px;
                }

                .logindiv * {
                        margin-top: 10px;
                        margin-bottom: 10px;
                }

                .loginTitle {
                        font-size: var(--font-size-header-S);
                        font-family: var(--font-calps);
                }

                #makeAccountDiv {
                        background-color: var(--color-background-decoration);
                }



                /* inner elements */
                .signBtn {
                        background-color: var(--color-elevated-green);
                        color: white;
                        box-shadow: var(--shadow-box);
                        border-radius: var(--border-radius-pill);
                
                        padding: var(--padding-btn-default);
                        min-width: 150px;
                        font-size: var(-font-size-body-L);
                        font-weight: bold;
                }

                input { 
                        display: block;
                        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.194);
                        border: var(--border-grey-thin);

                        min-width: 400px;
                        line-height: 25px;
                        padding: var(--padding-btn-default);
                }

                .signBtn:hover {
                        filter: brightness(70%);
                }



                /* toasts */
                .toastBox {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        color: white;
                        align-self: flex-end;
                        /* margin-top: -350px; */
                        position: sticky;
                        
                        bottom: 200px;
                        float: right;      
                }



                .toast {
                        background-color: #FF7253;
                        width: 400px;
                        min-height: 100px;
                        margin: 5px 0px;


                        display: flex;
                        align-items: stretch;
                        justify-content: start;
                        

                        font-size: var(--font-size-body-L);
                        font-family: var(--font-roboto);
                }
                .toast:hover {
                        filter: brightness(110%);
                }

                .toast * {
                        align-self: center;
                        margin-right: 10px;
                }
                .toast div { 
                        /*for override accent height*/
                        align-self: stretch;
                }

                .toast p {
                        width: 100%;
                }

                /* hidden by default */
                .toastMobile {
                        display: none;
                        width: 100%;
                }

                @media only screen and (max-width: 500px){
                        .toastBox {
                                width: 100%; 
                                bottom: 0;
                        }
                        .toast {
                                /* width: 100%; */
                                display: none;
                        } 
                        .toastMobile {
                                display: flex;
                        }
                }



                .accent {
                        height: auto;
                        width: 15px;
                        background-color: #f00;
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
                        position: sticky;
                }

                .dismissBtn:hover {
                        filter: brightness(70%);
                }




                /* overrides for colours of sucess toasts */
                .sucessToast {
                        background-color: #87C259;
                }

                .sucessAccent {
                        background-color: #7FFB74;
                }
                        
                        
                `}
        </style>

        <div className='psudoBody'>
                
                <div id= "mainContent">
                        <div className='logindiv'>
                                <h2 className='loginTitle'>LOG IN</h2>
                                <input id="loginEmail" type="email" placeholder="Enter email address"></input>
                                <input id="loginPassword" type="password" placeholder="Enter password"></input>
                                <button className="signBtn" onclick="alert('waaaah')">Sign in</button>
                                <p className='tooltip'>Don't have an account? Sign up below!</p>
                        </div>  

                        <div className="logindiv" id="makeAccountDiv">
                                <h2 className='loginTitle'>CREATE ACCOUNT</h2>
                                <input id="makeAcctEmail" type="email" placeholder="Enter email address"></input>
                                <input id="makeAcctPassword" type="password" placeholder="Enter password"></input>
                                <input id="makeAcctPasswordConfirm" type="password" placeholder="Confirm password"></input>
                                <button className="signBtn" onclick="alert('waaaah')">Sign up</button>
                        </div>  
                </div>

                {/* remind me to figure out how to pin toasts on screen without adding extra space below */}
                <div className='toastBox'>
                        <div className='toast'>
                                <div className='accent'></div>
                                <rect className='icon'></rect>
                                <p>Incorrect username or password</p>
                                <button className='dismissBtn'>X</button>
                        </div>
                        <div className='toast sucessToast'>
                                <div className='accent sucessAccent'> </div>
                                <rect className='icon'></rect>
                                <p>Login Sucess!</p>
                                <button className='dismissBtn'>X</button>
                        </div>
                        <div className='toast'>
                                <div className='accent'></div>
                                <rect className='icon'> </rect>
                                <p>Something very unusually long that takes up way to much space so that this is multi-lined.</p>
                                <button className='dismissBtn'>X</button>
                        </div>

                        <div className='toast toastMobile'>
                                <div className='accent'></div>
                                <rect className='icon'> </rect>
                                <p>This is a mobile webpage toast</p>
                                <button className='dismissBtn'>X</button>
                        </div>
                </div>

        </div>

        </>

  )
}