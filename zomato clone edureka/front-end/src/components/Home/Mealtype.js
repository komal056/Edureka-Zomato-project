import React from 'react'

export default function Mealtype(props) {
    return(
      
        <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="titleContainer">
            <div className="titleComponet1">
                <img src={`/${props.item.image}`} height="160" alt='HomePage'/>
            </div>
            <div className="titleComponent2">
                <div className="componentHeading">
                   {props.item.name}
                </div>
                <div className="componentSubHeading">
                  {props.item.content}
                </div>
            </div>
        </div>
    </div>
    
   
    )
    
}