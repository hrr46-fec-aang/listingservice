import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Desc from './components/Desc.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      site: '',
      mounted: true
    };
  }

  componentDidMount() {
    //this.getOverview();
    //console.log('compMount:', this.state.site);
    var state = this;
    var id = window.location.pathname;
    // state.setState({mounted: true});
    console.log(state.state);

    $.get('/site' + id, function(result) {
      if (state.state.mounted) {
        state.setState({
          site: result
        });
        console.log(state.state);
      }
    });


    // $.ajax('/site' + id, {
    //   method: 'GET',
    //   dataType: 'json',
    //   success: function(result) {
    //     if (!state.state.mounted) {
    //       state.setState({site: result});
    //     }
    //     console.log('state:', state.state);
    //   }.bind(this),
      // success: function(result) {
      //   if (!state.state.mounted) {

      //     state.setState({site: result});
      //     console.log('compMount state:', state.state.site);
      //   }
      // }.bind(this),
    //   error: function(err) {
    //     console.log(err);
    //   }
    // });
  }

  // getOverview() {
  //   var state = this;
  //   console.log('client entered');
  //   var id = window.location.pathname;
  //   console.log(id);
  //   $.ajax('http://localhost:3002/site/:id', {
  //     method: 'GET',
  //     dataType: 'json',
  //     success: function(res) {
  //       state.setState({site: res});

  //     },
  //     error: function(err) {
  //       console.log(err);
  //     }
  //   }
  //   );


  render() {
    var state = this;
    return (
      <div>
        <h1>Site Listing</h1>
        <section>
          <div>
            <Desc info={state.state.site}/>
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
  }
}

ReactDOM.render(<App />, document.getElementById('listing'));