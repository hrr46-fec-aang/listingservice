import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const CardWrapper = styled.section`
  display: flex;
  width: 75%;
  margin-left: 10%;
  margin-right: 25%;

`;

const Card = styled.section`
  margin: 0 10px 20px 10px;
  position: relative;
  background-color: #fff;
  border: 1px solid #ebebeb;
  padding: 15px 5px 15px 15px;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  line-height: 1.4;

`;

const InfoCards = function(props) {
  return (
    <CardWrapper>
      <Card>
        <h3>Campsite area</h3>
      </Card>
      <Card>
        <h3>Essentials</h3>
      </Card>
      <Card>
        <h3>Amenities</h3>
      </Card>
    </CardWrapper>
  );
};

export default InfoCards;