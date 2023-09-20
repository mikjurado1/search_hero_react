import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByHelper'
import HeroeCard from './HeroeCard'

export const HeroeList = ({publisher}) => {

const heroes = useMemo(()=>getHeroesByPublisher(publisher), [publisher]) 

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(hero=>(
                 <HeroeCard 
                  key={hero.id}
                  {...hero}
                 />
            ))
        }
    </div>
  )
}
