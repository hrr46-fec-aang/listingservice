import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

import Desc from './components/Desc.jsx';
import InfoCards from './components/InfoCards.jsx';
import ContactHost from './components/ContactHost.jsx';
import Host from './components/Host.jsx';


const Container = styled.section`
  margin-left: -10px;
  margin-right: -10px;
  width: 66.66666667%;
  position: relative;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;

`;
const Body = styled.div`
  font-family: "Calibre", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  color: #333333;
  background-color: white;
`;

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

    if (state.state.site.id !== id) {
      $.get('/site' + id)
        .then(function(res) {
          state.setState({site: res});
          state.setState({mounted: true});
        }
        );
    }
  }

  render() {
    var state = this;
    if (state.state.mounted) {
      return (
        <Body>
          <section>
            <Container>
              <Host info={state.state.site}/>
              <Desc info={state.state.site}/>
            </Container>

            <div>
              <InfoCards info={state.state}/>
            </div>

            <div>
              <ContactHost info={state.state}/>
            </div>
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
        </Body>
      );
    } else {
      return null;
    }
  }

}

ReactDOM.render(<App />, document.getElementById('listing'));