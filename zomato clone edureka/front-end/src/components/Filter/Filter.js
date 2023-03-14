/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react'
import '../../styles/Filter.css'
import SearchResult from './SearchResult'

export default function Filter() {
  const [restaurants, setRestaurants] = useState([])
  const [filter, setFilter] = useState({
    cuisine: [],
    sort: 1,
    lcost: '',
    hcost: '',
    city_id: ''
   
  })

  const [currentPage, setCurrentpage] = useState(1)
  


  useEffect(() => {
    fetch(`http://localhost:9027/restaurants/filter/${currentPage}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filter)
    })
      .then(response => response.json())
      .then(data => setRestaurants(data.data))
  }, [filter,currentPage])


  const handleCuisineChange = (e) => {
    if (e.target.checked)
      filter.cuisine.push(e.target.value)
    else {
      let index = filter.cuisine.indexOf(e.target.value);
      if (index > -1)
        filter.cuisine.splice(index, 1)
    }
    setFilter({ ...filter })

  }
  const locationChange=(e)=>{
    filter.city_id=e.target.value;
    setFilter({...filter});
}

  const handleCost = (lcost, hcost) => {
    filter.lcost = lcost;
    filter.hcost = hcost;
    setFilter({ ...filter })

  }

  const handleSort = (sort) => {
    filter.sort = sort
    setFilter({ ...filter })
  }



  return (
    <div>
      <header className="header">

        <div className='logoA'>
          <p> e!</p>
        </div>

        <span className="buttonContainer">
          <button className="loginA">Login</button>
          <button className="createanaccountA">create an account</button>
        </span>
      </header>

      <section>
        <div className="headingA">Breakfast Places in Mumbai</div>
        <span className="box"></span>

        <article className="filters">Filters</article>
        <label for="Select">Select Location</label>
        <br />
        <select className="Rectangle-2236" onChange={(e)=>locationChange(e)}>
                <option selected disabled>Select</option>
                          <option value='1'>Delhi</option>
                          <option value='2'>Mumbai</option>
                          <option value='3'>Pune</option>
                          <option value='4'>Banglore</option>
                          <option value='5'>Chandigarh</option>
                </select>
        <span className="cui" >cuisine</span>
        <label className="ni">
          <input type="checkbox" name="food" className="checkmark" value=" North Indian" onChange={(e) => handleCuisineChange(e)} />   North Indian
        </label>
        <label className="si">
          <input type="checkbox" name="food1" className="checkmark" value="South Indian" onChange={(e) => handleCuisineChange(e)} />  South Indian
        </label>
        <label className="ch">
          <input type="checkbox" name="food2" className="checkmark" value="Chinese" onChange={(e) => handleCuisineChange(e)} />  Chinese
        </label>
        <label className="ff">
          <input type="checkbox" name="food3" className="checkmark" value="Fast Food" onChange={(e) => handleCuisineChange(e)} />  Fast Food
        </label>
        <label className="sf">
          <input type="checkbox" name="food4" className="checkmark" value="Street Food" onChange={(e) => handleCuisineChange(e)} />  Street Food
        </label>
        <span className="cft" >Cost For Two</span>
        <label className="c1">
          <input type="radio" name="cost" onChange={() => handleCost(0, 500)} />  Less than `500
        </label>
        <label className="c2">
          <input type="radio" name="cost" onChange={() => handleCost(500, 1000)} />  `500 to `1000
        </label>
        <label className="c3">
          <input type="radio" name="cost" onChange={() => handleCost(1000, 1500)} />  `1000 to `1500
        </label>
        <label className="c4">
          <input type="radio" name="cost" onChange={() => handleCost(1500, 2000)} />  `1500 to `2000
        </label>
        <label className="c5">
          <input type="radio" name="cost" onChange={() => handleCost(2000, 10000)} />  `2000+
        </label>
        <span className="sort">Sort</span>
        <label className="hl">
          <input type="radio" name="hightolow" checked={filter.sort == -1} onChange={() => handleSort(-1)} />  Price high to low
        </label>
        <label className="lh">
          <input type="radio" name="hightolow" checked={filter.sort == 1} onChange={() => handleSort(1)} />  Price low to high
        </label>

        {restaurants.map(item => <SearchResult key={item.name} item={item}></SearchResult>)}
      </section>

      <div className="big vertical">
        { }
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#" onClick={() => setCurrentpage(1)}>1</a>
          <a href="#" onClick={() => setCurrentpage(2)}>2</a>
          <a href="#" onClick={() => setCurrentpage(3)}>3</a>
          <a href="#" onClick={() => setCurrentpage(4)}>4</a>
          <a href="#" onClick={() => setCurrentpage(5)}>5</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  )
}






