import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faStar} from '@fortawesome/free-regular-svg-icons';


// const HostStar = styled(faStar)`
//   color: blue;
// `;

const Container = styled.section`

`;

const Host = styled.div`
float: right;
`;

const Avatar = styled.img`
  border-radius: 100px;
  float: left;
`;

const HostStatus = styled.i`
  position: absolute;
  top: 80%;
  left: 20%;
  color: gold;
  border-radius: 100px;

`;

const HostBy = styled.h4`
  font-size: 1em;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;
const HostName = styled.p`
  font-size: 1em;
  margin-block-start: 0em;
  margin-block-end: 0em;
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

const Desc = function(props) {
  return (
    <Container>
      <HostWrapper>
        <Avatar src={props.info.host.image}></Avatar>
        {/* <span>
          <HostStatus>
            <FontAwesomeIcon icon={faStar}/>
          </HostStatus>
        </span> */}
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