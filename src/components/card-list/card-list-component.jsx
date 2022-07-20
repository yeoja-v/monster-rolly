import { Component } from "react";

class CardList extends Component {
    render() {

        console.log('render from Cardlist')
        const { monsters } = this.props;
        const {name, id, email} = monsters;
        // destructure, reason if we need this in more places than once, its easier

        return (

        <div className="card-list" >
          {monsters.map((monsters)=> (


              <div className="card-container" key={monsters.id}>
                <img 
                alt={`monster ${monsters.name}`}
                src={`https://robohash.org/${monsters.id}?set=set2&size=180x180`}
                 />
                <h2>{monsters.name}</h2>
                <p>{monsters.email}</p>
            </div>
             
            )
          )
           }
        </div>
        )
        
    }
}

export default CardList