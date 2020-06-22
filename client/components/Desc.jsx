import React from 'react';
import ReactDOM from 'react-dom';

const Desc = function(props) {
  return (
    <div>
      <h2>{props.info.host.name}</h2>
      {/* some info for the fafa star */}
      {/* {(props.info.host.status) =>
          <i class="fas fa-star"></i>
      } */}


      <div>{props.info.site.desc.split('\n').map((para) => (
        <p>{para}</p>
      )
      )}

      </div>



    </div>
  );
};

export default Desc;