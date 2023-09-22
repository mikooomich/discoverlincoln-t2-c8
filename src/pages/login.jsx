import DefaultButton from '@/components/DefaultButton'
import React from 'react'

import Toast from '@/components/Toast';
import TextInput from '@/components/TextInput';

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
                                <TextInput className="loginInput" placeholder="Enter email address"></TextInput>
                                <TextInput className="loginInput" placeholder="Enter password"></TextInput>
                                <DefaultButton className="signBtn" children="Sign in"></DefaultButton>
                                <p className='tooltip'>Don't have an account? Sign up below!</p>
                        </div>  

                        <div className="logindiv" id="makeAccountDiv">
                                <h2 className='loginTitle'>CREATE ACCOUNT</h2>
                                <TextInput className="loginInput" placeholder="Enter email address"></TextInput>
                                <TextInput className="loginInput" placeholder="Enter password"></TextInput>
                                <TextInput className="loginInput" placeholder="Confirm password"></TextInput>
                                <DefaultButton className="signBtn" children="Sign up"></DefaultButton>
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