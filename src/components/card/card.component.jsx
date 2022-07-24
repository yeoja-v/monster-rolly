import React, { Component } from 'react'
import './card.styles.css';

class CardComponent extends Component {
  render() {
    const {id, name, email} = this.props.monsters;

    return (
        <div className="card-container" key={id}>
        <img 
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
         />
        <h2>{name}</h2>
        <p>{email}</p>
    </div> 
    )
  }
}

export default CardComponent