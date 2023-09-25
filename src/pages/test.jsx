import FontAwesomeExample from '@/components/FontAwesomeExample'
import ImageExample from '@/components/ImageExample'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

import TestComponent from '../components/TestComponent'

export default function test() {
  return (
    <>
      <Navbar></Navbar>
      <TestComponent color={"red"}>
        <div>
        </div>
      </TestComponent>

      <ImageExample></ImageExample>
      <FontAwesomeExample></FontAwesomeExample>
      <Footer></Footer>
    </>
  )
}
