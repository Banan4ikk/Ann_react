import React from 'react';

function Card(props) {
   const {cardInfo} = props
   // const cards = props.cards
   return (
      <a href='#'>
         <div className="card">
            <div className="card-img">
               <img
                  src={cardInfo.img}
                  alt={cardInfo.name}/>
            </div>
            <h3>{cardInfo.name}</h3>
            <p>{cardInfo.prise}</p>
         </div>
      </a>
   )
}

export default Card;