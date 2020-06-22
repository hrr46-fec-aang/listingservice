import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Desc from './components/Desc.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      site: '',
      mounted: false
    };
  }

  componentDidMount() {
    var state = this;
    var id = window.location.pathname;

    $.get('/site' + id)
      .then(function(res) {
        state.setState({site: res});
        state.setState({mounted: true});
      }
      );
  }

  render() {
    var state = this;
    if (state.state.mounted) {
      return (
        <div>
          <h1>Site Listing</h1>
          <section>
            <div>
              <Desc info={state.state}/>
            </div>

            {/* <div>
              <InfoCards/>
            </div>

            <div>
              <ContactHost/>
            </div> */}
          </section>
          {/* <section>
            <Details/>
          </section>
          <div>
            <Features/>
          </div>
          <section>
            <Vibe/>
          </section> */}
        </div>
      );
    } else {
      return null;
    }
  }

}

ReactDOM.render(<App />, document.getElementById('listing'));