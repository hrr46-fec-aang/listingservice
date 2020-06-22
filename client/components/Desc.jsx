import React from 'react';
import ReactDOM from 'react-dom';

const Desc = function(props) {
  return (
    <div>
      <h2>{props.info.site.host.name}</h2>
    </div>
  );
};

export default Desc;