import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.section`

`;

const Host = styled.section`
`;

const Avatar = styled.img`
  border-radius: 100px;
  float: left;
`;

const HostStatus = styled.i`
  position: absolute;
  top: 80%;
  left: 20%;
`;

const HostBy = styled.h4`
  font-size: 1.5em;
`;
const HostName = styled.p`
  font-size: 1.5em;
`;

const HostWrapper = styled.section`
  width: 15%;
  height: 400px;
  float: left;
  padding: 4em;
  margin-left: 10px;
  background: papayawhip;
`;

const DesWrapper = styled.section`
  margin-left: 15%;
  height: 400px;
  padding: 4em;
  margin-right: 10px;
  background: pink;
`;

// color: ${props => props.info.host.status ? 'orange' : 'palevioletred'};



const Desc = function(props) {
  return (
    <Container>
      <HostWrapper>
        <Avatar src={props.info.host.image}></Avatar>
        <span>
          {/* <HostStatus class="fas fa-star"></HostStatus> */}
        </span>
        <Host>
          <HostBy>Hosted by</HostBy>
          <HostName>{props.info.host.name}</HostName>
        </Host>

      </HostWrapper>



      <DesWrapper>{props.info.site.desc.split('\n').map((para) => (
        <p>{para}</p>
      ))}

      </DesWrapper>



    </Container>
  );
};

export default Desc;