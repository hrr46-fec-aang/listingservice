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
        <section>
          <div>
            <Desc/>
          </div>

          <div>
            <InfoCards/>
          </div>

          <div>
            <ContactHost/>
          </div>
        </section>
        <section>
          <Details/>
        </section>
        <div>
          <Features/>
        </div>
        <section>
          <Vibe/>
        </section>


      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('listing'));