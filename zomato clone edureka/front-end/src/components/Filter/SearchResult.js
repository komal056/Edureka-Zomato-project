import React from 'react'

export default function SearchResult(props) {
  return (

    <div>
     <div className="Item">
    <div>
       
          
    
        <div className="big-item">
            <span className="rest-name">{props.item.name}</span>
            <img className="img" src={props.item.thumb} />
            <span className="rest-location">{props.item.location}</span>
            <span className="rest-address">{props.item.address}</span>
       
        </div>
    </div>
    <hr />
    <div>
        <div className="margin-left">
            <span className="CUI">CUISINES : </span>
            <span className="COST">COST FOR TWO : &#8377; {props.item.cost} </span>
        </div>
    </div>

    </div>
</div>
  )
}