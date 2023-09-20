import React from 'react'

export default function login() {
  return (
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

  )
}