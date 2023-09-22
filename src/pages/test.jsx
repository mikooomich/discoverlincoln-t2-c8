import FontAwesomeExample from '@/components/FontAwesomeExample'
import ImageExample from '@/components/ImageExample'
import React from 'react'

import TestComponent from '../components/TestComponent'

export default function test() {
  return (
    <>
      <TestComponent color={"red"}>
        <div>
        </div>
      </TestComponent>

      <ImageExample></ImageExample>
      <FontAwesomeExample></FontAwesomeExample>
    </>
  )
}
