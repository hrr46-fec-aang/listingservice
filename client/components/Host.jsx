import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faStar} from '@fortawesome/free-regular-svg-icons';


// const HostStar = styled(faStar)`
//   color: blue;
// `;

// const HostStatus = styled.i`
//   top: 80%;
//   left: 20%;
//   color: gold;
//   border-radius: 100px;

// `;

const Avatar = styled.img`
  border-radius: 100px;
  position: relative;
  width: 50%;
  float: left;
`;

const HostInfo = styled.div`
  margin-left: 60%;
  margin-top: 15%;
  margin-bottom: 25%;
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
  position: relative;
  width: 15%;
  float: left;
  margin-left: 10%;
  background: papayawhip;
`;

const Host = function(props) {

  var overview = props.info.site.desc.slice(0, 300);

  var clickHandler = function() {
    overview = props.info.site.desc;
    return overview;
  };

  return (
    <HostWrapper>
      <Avatar src={props.info.host.image}></Avatar>
      {/* <span>
        <HostStatus>
          <FontAwesomeIcon icon={faStar}/>
        </HostStatus>
      </span> */}
      <HostInfo>
        <HostBy>Hosted by</HostBy>
        <HostName>{props.info.host.name}</HostName>
      </HostInfo>
    </HostWrapper>
  );
};

export default Host;