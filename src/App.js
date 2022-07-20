import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/searchbox/search-box.component';

class App extends Component {

  constructor(props) {
    super(props)
// initialize the state, thats what constructor function does
    this.state = {
      monsters: [],
      searchField: '',
    
    };
    console.log('constructor')
  }

  componentDidMount () {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () => {console.log(this.state)}
    )
    )
  }

  onSearchChange = (event) => {console.log(event.target.value);
          
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
      
    })
  }

  render () {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;


    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    console.log('render')



    return (
      <div className="App">
        <SearchBox 
        className='search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters' />

       {/* {
       filteredMonsters.map((monster) => {
        return <div key={monster.id}><h1>{monster.name}</h1></div>
       })
       } */}

       <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
