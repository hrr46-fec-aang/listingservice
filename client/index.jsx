import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getOverview() {
    $.ajax('/:id', {

      method: 'GET',
      dataType: 'json',
      success: function(res) {
        console.log(res.body);
      }
    }
    );
  }

  render() {
    return (
      <div>
        Hello, world!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('listing'));