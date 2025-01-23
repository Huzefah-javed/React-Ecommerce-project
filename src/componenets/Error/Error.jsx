import React from "react";
import './Error.css';

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-wrapper">
        <h1 className="error-code">404</h1>
        <p className="error-message">Whoops! Looks like you’ve taken a wrong turn.</p>
        <p className="error-description">
          This page is unavailable. You can either go back home or contact us if you need assistance.
        </p>
        <div className="error-actions">
          <a href="/" className="error-btn primary">Back to Home</a>
          <a href="/contact" className="error-btn secondary">Contact Support</a>
        </div>
      </div>
    </div>
  );
};

export default Error;
