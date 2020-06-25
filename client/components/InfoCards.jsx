import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CampCard from './CampCard.jsx';
import EssCard from './EssCard.jsx';
import AmntCard from './AmntCard.jsx';

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;

`;


const InfoCards = function(props) {
  var curr = props.info;
  return (
    <CardWrapper>
      <CampCard name='Campsite area' cardInfo={curr.info.area} />
      <EssCard name='Essentials' cardInfo={curr.info.ess} />
      <AmntCard name='Amenities' cardInfo={curr.info.amnt} />
    </CardWrapper>
  );
};

export default InfoCards;