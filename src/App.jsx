import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountry } from './slices/countrySlice/asyncAction/asyncAction'
import './App.css'

const App = () => {
  const [search,setSearch]=useState('')
  const { countryData, status, error } = useSelector(state => state.country)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountry())
  }, [])
  console.log(countryData);
  const change=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div>
    <div className="container">
      <input
        className="input"
        type="text"
        value={search}
        onChange={change}
        placeholder="Search "
      />
    </div>

    <div className="country-cards-container">
      {countryData.filter(el => el.name.toLowerCase().startsWith(search.toLowerCase())).map(el => (
          <div className="country-card" key={el.id}>
            <p>{el.id}</p>
            <h1>{el.name}</h1>
            <h2>{el.capital}</h2>
            <div style={{ gap: '20px', display: 'flex' }}>
              {el.media.flag !== '' ? <img width={100} height={60} src={el.media.flag} alt="Flag" /> : <p>Фото не найден</p>}
              {el.media.emblem !== '' ? <img width={100} height={80} src={el.media.emblem} alt="Emblem" /> : <p>Фото не найден</p>}
              {el.media.orthographic !== '' ? <img width={100} height={100} src={el.media.orthographic} alt="Orthographic" /> : <p>Фото не найден</p>}
            </div>
            <h3>Phone: {el.phone.charAt(0) === '+' ? el.phone : '+' + el.phone}</h3>
          </div>
        ))}
    </div>
  </div>

  )
}

export default App