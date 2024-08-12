import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { asyncLoadPerson, removePerson } from '../Store/actions/PersonAction'

function PersonDetails() {
  const {id} = useParams()
  const results = useSelector(state=> state.person.data);
  console.log(results);
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(asyncLoadPerson(id));  
    return ()=>{
      dispatch(removePerson());
    }
  },[id]);
  return results ?  (
    <div className='w-full h-screen text-white p-4'>
      
      <img className='w-64 rounded-xl' src={`https://image.tmdb.org/t/p/original/${
      results.data.profile_path 
        }`} alt="" />
        <h1>{results.data.name}</h1>
    </div>
  ) : "asdf"
}

export default PersonDetails