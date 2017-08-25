import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    const LIST = [
      {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0
      },
      {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1
      }
    ]

    this.state = {
      header: 'Hackernews API Project',
      LIST
    }

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id) {
    const isNotId = (item) => item !== id;
    const updatedList = this.state.LIST.filter(isNotId);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.header}</h1>
        {this.state.LIST.map(item =>
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author ? item.author : 'Anonymous'}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>

              <span>
                <button onClick={() => this.onDismiss(item.objectID)}
                  type="button">
                  Dismiss
                </button>
              </span>
            </div>
        )}
      </div>
    );
  }

}

export default App;
