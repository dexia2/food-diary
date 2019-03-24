import React, {Component} from 'react';
import axios from 'axios';

type Food = {
  id: number,
  foodGroup: number,
  name: string
}

interface State {
  foods: Food[],
}

class Hello extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      foods: []
    };
  }
  componentDidMount(){
    axios.get('http://localhost:3000/foods').then(res => {
      const foods: Food[] = res.data;
      this.setState({foods});
    });
  }
  render() {
    return <ul>
      {this.state.foods.map(food =>
        <li key={food.id}>{food.name}</li>
      )}
    </ul>;
  }
}

export default Hello;
