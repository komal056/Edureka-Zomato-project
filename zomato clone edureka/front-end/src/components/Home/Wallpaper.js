/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Wallpaper extends Component {

  constructor() {
    super()
    this.state = {
      locations: [],
      restaurants:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:9027/location',{method:'GET'})
    .then(response=>response.json())
    .then(data=>this.setState((state)=>({...state,locations:data.data})))
  }

  fetchRestaurants=(event)=>{
   console.log(event.target.value)
    fetch(`http://localhost:9027/restaurants/${event.target.value}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>this.setState((state)=>({...state,restaurants:data.data})))
}

 
  render() {
    return (
        <div>
         
            <img src={`/assets/Home.png`} width="100%" />
            <a href="#" className="loginb">Login</a>
            <a href="#" className="createanaccountb">Create an account</a>
            <div className="logob">
              <span>e!</span>
            </div>

            <div className="restaurant-title">
              Find the best restaurants, cafés, and bars
            </div>
            <div className="locationselector">
              <select className="locationDropdown" onChange={this.fetchRestaurants}>
                <option value="0" defaultValue={0} >Select</option>
                {this.state.locations.map(item => <option key={item.name} value={item.city_id}>{item.name}</option>)}
              </select>
        
         

              <div id="notebook">
                <input className="searchrestaurant" type="text" placeholder="Enter Resataurant Name" />
                <ul>{this.state.restaurants.map(item=><li key={item.name}><Link to={`/details/${item.name}`}>{item.name}</Link></li>)}</ul>
                <span className="searchicon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
              </div>
              </div>
        </div>
    );
  }
}
