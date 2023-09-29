import FontAwesomeExample from '@/components/FontAwesomeExample'
import ImageExample from '@/components/ImageExample'
import LargeCardDesktop from '@/components/LargeCardDesktop'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LargeCardMobile from '@/components/LargeCardMobile'
import Image from "next/image";
import React from 'react'

import TestComponent from '../components/TestComponent'
import BusinessCard from '@/components/BusinessCard'
import Section from '@/components/Section'
import MobileHamburgerMenu from '@/components/MobileHamburgerMenu'
import SmallCard from '@/components/SmallCard'
import ExampleState from '@/components/ExampleState'
import StrapiExample from '@/components/StrapiExample'

export default function test() {
  return (
    <>
      <Navbar></Navbar>
      <SmallCard>

       
						<Image src="Icon-glass.svg" width={20} height={20} alt="uwu" />
			
      </SmallCard>
      <TestComponent color={"red"}>
        <div>
        </div>
      </TestComponent>

      <BusinessCard title={"Emergency Services"}>
        <p>Number one <br />
          number two number <br />
          three aaaaaaaaaaa some long phrase idk</p>
      </BusinessCard>


      <BusinessCard title={"Emergency Services"} theme='light'>
        <p>Number one <br />
          number two number <br />
          three aaaaaaaaaaa</p>
      </BusinessCard>

      <BusinessCard isMobile="true" title={"Emergency Services"} theme='light'>
        <p>Number one <br />
          number two number <br />
          three aaaaaaaaaaa</p>
      </BusinessCard>

      <ImageExample></ImageExample>
      <FontAwesomeExample></FontAwesomeExample>

      <Section>
        <div style={{ background: "red", width: "100%" }}>
          <p>section test</p>
        </div>
      </Section>

      <Footer></Footer>
      <LargeCardMobile></LargeCardMobile>
      <LargeCardMobile isTicket={false}></LargeCardMobile>

      <ExampleState />

      <StrapiExample></StrapiExample>
    </>
  )
}
