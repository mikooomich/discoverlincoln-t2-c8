import DefaultButton from '@/components/DefaultButton'
import React from 'react'

import Toast from '@/components/Toast';
import TextInput from '@/components/TextInput';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function login() {
	return (
		<>

			<style jsx>
				{`

                #mainContent {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: -200px; 
                        {/* hax: margin Removes space taken up by toastBox. 
                        maybe limit to one toast or fixed toast box size...?*/}
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
						width:100%;
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

                .bot {
                        position: fixed;
                        bottom:0;
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
                        
                        float: right;    
						bottom:0;
                        
                }



                @media screen and (max-width: 500px){
					.toastBox {
						width: 100%; 
						{/* bottom: 0; */}
					}

					#makeAccountDiv {
						margin-bottom: 100px;
					}

					.loginTitle {
                        font-size: var(--font-size-header-XS);
               
                	}
                }
        `}
			</style>

			<Navbar></Navbar>
			<Section marginBottom='100px;'>

				<div id="mainContent">
					<div className='logindiv'>
						<h2 className='loginTitle'>LOG IN</h2>
						<TextInput className="loginInput" placeholder="Enter email address"></TextInput>
						<TextInput className="loginInput" placeholder="Enter password"></TextInput>
						<DefaultButton className="signBtn">Sign in</DefaultButton>
						<p className='tooltip'>Don't have an account? Sign up below!</p>
					</div>

					<div className="logindiv" id="makeAccountDiv">
						<h2 className='loginTitle'>CREATE ACCOUNT</h2>
						<TextInput className="loginInput" placeholder="Enter email address"></TextInput>
						<TextInput className="loginInput" placeholder="Enter password"></TextInput>
						<TextInput className="loginInput" placeholder="Confirm password"></TextInput>
						<DefaultButton className="signBtn">Sign up</DefaultButton>
					</div>
				</div>

				

			</Section>

			<div className='toastBox'>
					<Toast bgColor="err" text='Incorrect username or password'></Toast>
					<Toast bgColor="success" text='Login Sucess!'></Toast>
					<Toast bgColor="err" text='Something very unusually long that takes up way to much space so that this is multi-lined.'></Toast>

					{/* Mobile toast example */}
					<Toast clasName="toast toastMobile" bgColor="err" text='This is an example of a mobile toast.'></Toast>
				</div>
			<Footer></Footer>

		</>

	)
}