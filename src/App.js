import React from 'react';
import axios from 'axios';
import List from "./List";

class App extends React.Component {
  constructor() {
    super()
    this.state = { items: [] };
  }
  componentDidMount() {
    axios.get('http://localhost:3003/timing')
    .then(a=>{
      const persons = a.data;
        this.setState({items: persons });
    })
  }
  
  render() {
    var k = [],d=[],f=[];
    for (var i = 1; i <= 30; i++) {
      k.push(i);
    }
    {
      this.state.items.map(i=>{
        d=k.filter(e => e <parseInt(i.start, 10))
        f=k.filter(e => e >parseInt(i.end, 10))
        k=d.concat(f)
      })}
    return (
      <div>
        <List tasks={this.state.items} array={k}/>
        </div>
    );
  }
}
export default App;
