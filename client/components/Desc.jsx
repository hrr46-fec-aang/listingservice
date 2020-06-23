import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const DesWrapper = styled.section`
  margin-left: 25%;
  width: 60%;
  margin-right: 25%;
  background: pink;
  font-size: 1.5em;
  width: 60%;
`;

const ReadMore = styled.a`
  font-weight: bold;
`;

class Desc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: false,
      overview: props.info.site.desc
    };
  }

  clickHandler(e) {
    this.setState({read: true});
    this.setState({overview: props.info.site.desc});
  }

  render() {
    if (this.state.read) {
      return (
        <DesWrapper>{this.state.overview.split('\n').map((para) => (
          <p>{para}</p>
        ))}
        </DesWrapper>

      );
    } else {
      return (
        <DesWrapper>
          {this.state.overview.slice(0, 300)}
          <ReadMore onClick={(e) => this.clickHandler(e)}> Read more...</ReadMore>
        </DesWrapper>
      );
    }
  }
}

export default Desc;