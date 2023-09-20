import React from 'react'
import { HeroeList } from './components/HeroeList'

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr/>

      <ul>
        <HeroeList publisher={'DC Comics'}/>
      </ul>
    </>
  )
}
