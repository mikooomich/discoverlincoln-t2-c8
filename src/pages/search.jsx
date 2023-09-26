import CardCarousel from '@/components/CardCarousel'
import DefaultButton from '@/components/DefaultButton'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Section from '@/components/Section'
import TextInput from '@/components/TextInput'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function search() {
        return (
                <>
                        <style jsx>
                                {`
                                
                                {/* heading, search bar, filter buttons */}
                                h1 {
                                        font-size: var(--font-size-header-M);
                                        font-weight: var(--font-weight-titles);
                                        font-family: var(--font-calps)
                                }

                                .topPart {
                                        display: flex;
                                        flex-direction: column;
                                        margin: auto;
                                        max-width: 1100px;
                                }
                                .searchBox {
                                        
                                        width: 100%;
                                }
                                .searchBoxWithIcon {
                                        display:flex;
                                }

                                .filter-sort {  
                                        align-self: end;
                                }



                                {/* Carousel */}
                                .cardPlaceholder {
                                        width: 360px;
                                        height: 360px;
                                        background-color: grey;
                                }

                                {/* for card spacing */}
                                li {
                                        margin: 20px;
                                }
		        `}
                        </style>

                        <Navbar></Navbar>

                        <Section marginTop='20px'>
                                <h1>Search Events & Attractions</h1>
                                <div className='topPart'>
                                        <div className='searchBoxWithIcon'>
                                                <DefaultButton >
                                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                </DefaultButton >

                                                <div className='searchBox'>
                                                        <TextInput placeholder={"Search"} width={`100%`}></TextInput>
                                                </div>
                                        </div>
                                        <div className='filter-sort'>
                                                <DefaultButton className="filter-sort-btn">Filter</DefaultButton>
                                                <DefaultButton className="filter-sort-btn">Sort</DefaultButton>
                                        </div>
                                </div>

                        </Section>


                        <Section marginBottom='40px'>
                                <CardCarousel title="Events" margin="0px 0px 40px 0px">
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                </CardCarousel>
                                <hr/>
                                <CardCarousel title="Attractions"  margin="40px 0px 40px 0px">
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                </CardCarousel>
                                <hr/>

                                <CardCarousel title="Business"  margin="40px 0px 40px 0px">
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                        <li>
                                                <div className='cardPlaceholder'></div>
                                        </li>
                                </CardCarousel>
                        </Section>

                        <Footer></Footer>
                </>

        )
}
