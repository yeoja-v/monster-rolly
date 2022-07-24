import { Component } from "react";
import CardComponent from "../card/card.component";


class CardList extends Component {
    render() {

        console.log('render from Cardlist')
        const { monsters } = this.props;
        // destructure, reason if we need this in more places than once, its easier

        return (

        <div className="card-list" >
          {monsters.map((monsters)=> {
            return (
              <CardComponent monsters={monsters}/>
            ) 
        })
           }
        </div>
        )
        
    }
}

export default CardList