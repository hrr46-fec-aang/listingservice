import React from 'react';
import ReactDOM from 'react-dom';

const Desc = function(props) {
  return (
    <div class='col'>
      <div class='listed-by'>
        <img src={props.info.host.image}></img>
        <span>
          <i></i>
        </span>
        <div class='host-info'>
          <span>Hosted by</span>
          <div>
            <a>{props.info.host.name}</a>
          </div>
        </div>
      </div>
      {/* some info for the fafa star
      {(props.info.host.status) =>
          <i class="fas fa-star"></i>
      }


      <div>{props.info.site.desc.split('\n').map((para) => (
        <p>{para}</p>
        ))}

      </div> */}



    </div>
  );
};

export default Desc;