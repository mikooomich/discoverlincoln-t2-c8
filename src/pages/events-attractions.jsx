import React from 'react'

export default function test() {
  return (
	<div className='psudoBody'>
  
                <div className='iconBackdrop'></div>

                <div className='maincontent'>

                        <div className='titleBlock'> 
                                <h1>Upcomming Events</h1>
                                <p>There is always something around the corner</p>
                        </div>

                        <div className='map'></div>



                        <div className='offerings'>
                                <h2>All Offerings</h2>

                                {/* scrollable offerings */}
                                <nav>
                                        <ul>
                                                <li className='card'>
                                                        <div className='info'></div>
                                                </li>

                                                <li className='card'>
                                                        <div className='info'></div>
                                                </li>

                                                <li className='card'>
                                                        <div className='info'></div>
                                                </li>
                                        </ul>
                                </nav>
                        </div>

                        <div className='mobileOfferings'>
                                <h2>All Offerings</h2>

                                {/* scrollable offerings */}
                                <nav>
                                        <ul>
                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>

                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>

                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>
                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>

                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>

                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>
                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>

                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>

                                                <li className='Mobilecard'>
                                                        <div className='Mobileinfo'></div>
                                                </li>
                                        </ul>
                                </nav>
                        </div>


                </div>

               

  	</div>
  )
}
