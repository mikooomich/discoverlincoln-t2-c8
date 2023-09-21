import React from 'react'
import DefaultButton from '@/components/DefaultButton'


export default function checkout() {
  return (
        <>
        <style jsx>
        {`

                #checkoutPsudoBody {
                        margin: auto;
                        max-width: 1200px;

                }

                .actionBar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 20px 0px;
                }


                .infoContainer {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        
                }
                
                .infoContainer ul {
                        width: 100%;
                        border: 1px solid black;
                }
                li {
                        display: flex;
                        align-items: center;
                       
                }
                
                li * {
                        margin: 5px 10px;
                }


                .verticalList {
                        display: flex;
                        flex-direction: column;
                      
                        align-items: start;
                       
                }


                #nameInput {
                        border: var(--border-grey-thin);
                }






                .costBox  {
                        width: 100%
                        display: flex;
                        flex-direction: column;
                      
                        align-items: start;

                }

                .costEntry {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                }


             /* Placeholder cards */
        .card {
                max-width: 1200px;
                min-width: 800px;
                min-height: 400px;
                margin-bottom: 20px;

                background-color: aqua;
                box-shadow: var(--shadow-box-massive-card);
        }

        .info {
                width: 700px;
                min-height: 400px;
                float: right;

                background-color: rgb(241, 184, 70);
        }

        .Mobilecard {
                width: 350px;
                height: 100px;
                margin-bottom: 20px;

                background-color: aqua;
                box-shadow: var(--shadow-box);
        }

        .Mobileinfo {
                width: 250px;
                height: 100px;
                float: right;

                background-color: rgb(241, 184, 70);
        }
        /* EndPlaceholder cards */
        
        
        `}



        </style>
       

        <div id="checkoutPsudoBody">
                <div className='orderSumamry'>
                        <div className='actionBar'>
                                <h1>Confirm Your Order</h1>
                                <DefaultButton text={"< Back"}></DefaultButton>
                        </div>

                        <div className='card'>
                                <div className='info'></div>
                        </div>
                </div>


                <div className='eventForm'>
                        <h1>EventForm</h1>

                        <div className='infoContainer'>
                                <ul>
                                        <li>
                                                <h3>Name:</h3>
                                                <input id="nameInput" type='text' placeholder='Enter answer'></input>
                                        </li>
                                        <li>
                                                <h3>Vehicles:</h3>
                                                1<input type='radio'></input>
                                                2<input type='radio'></input>
                                                3+<input type='radio'></input>
                                        </li>
                                </ul>

                                <ul>
                                        <li>
                                                <h3>Atendees:</h3>
                                                <input type='range'></input>
                                        </li>
                                        <li>
                                                <h3>Occupation:</h3>
                                                <input type='file'></input>
                                        </li>
                                </ul>

                        </div>


                        <div className='infoContainer'>
                                <ul >
                                        <li className='verticalList'>
                                                <h3>Notifications & Offers:</h3>
                                                
                                                <span><input type='checkbox'></input> I want to recieve email notifications</span>
                                                <span><input type='checkbox'></input> Subscribe to email offers</span>
                                                <span><input type='checkbox'></input> I agree to the terms of use</span>
                                        </li>
                                </ul>

                                <ul>
                                        <li>
                                                
                                                <input id="nameInput" type='text' placeholder='Discount Code'></input>
                                                <DefaultButton text={"Apply"}></DefaultButton>
                                        </li>
                                        <li className='costBox'>
                                                <span className='costEntry'>
                                                        <p>Subtotal</p>
                                                        <p>${/*insert react magic*/}49.99</p>
                                                </span> 
                                                <span className='costEntry'>
                                                        <p>Taxes</p>
                                                        <p>${/*insert react magic*/}6.50</p>
                                                </span> 
                                                <span className='costEntry'>
                                                        <p>Total</p>
                                                        <p>${/*insert react magic*/}56.49</p>
                                                </span> 
                                        </li>
                                </ul>

                        </div>


                </div>

                {/* TOS part */}
                <div>
                        <h3>Terms of Use</h3>
                        <p>By continuing, you agree to... blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day.  blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day.  blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day. blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day.  blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day.  blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day. blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day.  blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day.  blah blah legal stuff blah blah more fine print blah bluh you can’t sue us blah blah have a nice day. </p>

                        <DefaultButton text={"Proceed to Checkout"}></DefaultButton>
                </div>


        </div>
        </>

  )
}
