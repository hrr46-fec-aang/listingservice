import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const DesWrapper = styled.section`
  margin-left: 15%;
  height: 400px;
  margin-right: 25%;
  background: pink;
  font-size: 1.5em;
`;

const Desc = function(props) {

  var overview = props.info.site.desc.slice(0, 300);

  // var clickHandler = function() {
  //   overview = props.info.site.desc;
  //   return overview;
  // };

  return (
    <DesWrapper>
      {overview} <a>Read more...</a>
    </DesWrapper>

  );

};

export default Desc;

/* <DesWrapper>{props.info.site.desc.split('\n').map((para) => (
      <p>{para}</p>
    ))}
    </DesWrapper> */