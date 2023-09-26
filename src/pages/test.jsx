import FontAwesomeExample from '@/components/FontAwesomeExample'
import ImageExample from '@/components/ImageExample'
import LargeCardDesktop from '@/components/LargeCardDesktop'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import React from 'react'

import TestComponent from '../components/TestComponent'
import BusinessCard from '@/components/BusinessCard'

export default function test() {
  return (
    <>
      <Navbar></Navbar>
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
      <Footer></Footer>
      <LargeCardDesktop></LargeCardDesktop>
    </>
  )
}
