import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CampCard from './CampCard.jsx';
import EssCard from './EssCard.jsx';
import AmntCard from './AmntCard.jsx';
import Modal from './Modal.jsx';

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
`;

class InfoCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disp: false,
      name: undefined
    };
  }

  changeView(e, name) {
    this.setState({
      disp: true,
      name: name
    });
  }

  hideModal() {
    this.setState({
      disp: false,
      name: undefined
    });
  }

  render() {
    var show = this.state.disp;
    var curr = this.props.info;
    console.log(curr);
    if (show) {
      return ( <Modal disp={show} handleClose={() => this.hideModal()}></Modal>);
    } else {
      return (
        <CardWrapper>
          <CampCard name='Campsite area' cardInfo={curr.info.area} handleClick={(e, name) => this.changeView(e, name)}/>
          <EssCard name='Essentials' cardInfo={curr.info.ess} handleClick={(e, name) => this.changeView(e, name)}/>
          <AmntCard name='Amenities' cardInfo={curr.info.amnt} handleClick={(e, name) => this.changeView(e, name)}/>
        </CardWrapper>
      );
    }
  }
}

export default InfoCards;