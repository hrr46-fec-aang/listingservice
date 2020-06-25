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

// const Card = styled.section`
//   margin: 0 10px 20px 10px;
//   position: relative;
//   background-color: #fff;
//   border: 1px solid #ebebeb;
//   padding: 15px 5px 15px 15px;
//   flex-wrap: wrap;
//   line-height: 1.4;
//   width: 220px;
//   height: 340px;
//   box-shadow: 0 1px 2px rgba(0,0,0,0.08) !important;
// `;

const CardTitle = styled.div`
`;

const Info = styled.div`
`;

const VertIcon = styled.div`
`;

const Icon = styled.div`
`;

const IconInfo = styled.span`
`;

const CardText = styled.div`
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