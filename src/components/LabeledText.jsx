import React from 'react';

const LabeledText = ({ label, text }) => (
  <p><span className="secondary-text">{label}</span><strong>{text}</strong></p>
);

export default LabeledText;
