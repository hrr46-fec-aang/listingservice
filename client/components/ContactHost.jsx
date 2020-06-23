import React from 'react';
import ReactDOM from 'react-dom';

const ContactHost = function(props) {
  return (
    <div>
      <p>Have a question?</p>
      <p>Send {props.info.site.host.name} a message!</p>
    </div>
  );
};

export default ContactHost;