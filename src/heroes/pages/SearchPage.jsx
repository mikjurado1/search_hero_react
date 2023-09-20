import React from 'react'
import { useForm } from '../../hooks/UseForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import {getHeroesByName} from '../helpers'
import HeroeCard from '../pages/components/HeroeCard'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q=''} = queryString.parse(location.search)
  
  const heroes = getHeroesByName(q);
  const {searchText, onInputChange} = useForm({
    searchText:q
  })

  const onSearchSubmit =(event)=>{
    event.preventDefault()
    //if(searchText.trim().length <=1) return;

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <br/>
      <div className="row">
      <div className="col-5">
        Search
        <br/>
        <form onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder='Search a hero'
            className='form-control mb-2 mt-2'
            name="searchText"
            autoComplete='off'
            value={searchText}
            onChange={onInputChange}
          />
          <button
            className='btn btn-outline-primary mt-1'
          >
            Search
          </button>
        </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr/>
        {
          (q==='')
          ?
          <div className='alert alert-primary'>
            Search a hero
          </div>
          :(heroes.length ===0) &&
          <div className='alert alert-danger'>
            There is not results of <b>{q}</b>
          </div>
        }
       
       
        {
          heroes.map(hero =>(
            <HeroeCard 
            key={hero.id} 
            {...hero}
            />
          ))
        }
       
      </div>
      </div>
      
    </>
  )
}
