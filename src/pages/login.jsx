import React from 'react'

import Toast from '@/components/Toast';

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



                @media only screen and (max-width: 500px){
                        .toastBox {
                                width: 100%; 
                                bottom: 0;
                        }
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
                        <Toast bgColor="err" text='Incorrect username or password'></Toast>
                        <Toast bgColor="success" text='Login Sucess!'></Toast>
                        <Toast bgColor="err" text='Something very unusually long that takes up way to much space so that this is multi-lined.'></Toast>
                        
                        {/* Mobile toast example */}
                        <Toast clasName="toast toastMobile" bgColor="err" text='This is an example of a mobile toast.'></Toast>
                </div>

        </div>

        </>

  )
}