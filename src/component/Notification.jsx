import React from 'react';

const Notification = ({ message, success }) => (
  <div className={`notification ${success ? 'success' : 'failure'}`}>
    {message}
    <style jsx>{`
      .notification {
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
        color: #fff;
      }

      .success {
        background-color: #4caf50;  /* Green */
      }

      .failure {
        background-color: #f44336;  /* Red */
      }
    `}</style>
  </div>
);

export default Notification;
