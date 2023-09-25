import FontAwesomeExample from '@/components/FontAwesomeExample'
import ImageExample from '@/components/ImageExample'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

import TestComponent from '../components/TestComponent'
import BuisnessCard from '@/components/BuisnessCard'

export default function test() {
  return (
    <>
      <Navbar></Navbar>
      <TestComponent color={"red"}>
        <div>
        </div>
      </TestComponent>

      <BuisnessCard title={"Emergency Services"}>
        <p>Number one <br />
          number two number <br />
          three aaaaaaaaaaa some long phrase idk</p>
      </BuisnessCard>


      <BuisnessCard title={"Emergency Services"} theme='light'>
        <p>Number one <br />
          number two number <br />
          three aaaaaaaaaaa</p>
      </BuisnessCard>

      <BuisnessCard isMobile="true" title={"Emergency Services"} theme='light'>
        <p>Number one <br />
          number two number <br />
          three aaaaaaaaaaa</p>
      </BuisnessCard>

      <ImageExample></ImageExample>
      <FontAwesomeExample></FontAwesomeExample>
      <Footer></Footer>
    </>
  )
}
