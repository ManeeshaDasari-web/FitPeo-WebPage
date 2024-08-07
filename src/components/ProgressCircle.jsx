import React from 'react';

const ProgressCircle = ({ percentage }) => {
  const radius =70; // Radius of the circle
  const strokeWidth = 20; // Stroke width of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-circle">
      <svg
        width="150"
        height="150"
        viewBox="0 0 200 200"
      >
        <circle
          className="progress-circle-bg"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-circle-fg"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x="50%" y="50%" dy=".3em" textAnchor="middle" className="progress-text">
          {percentage}% 
        </text>
      </svg>
    </div>
  );
};

export default ProgressCircle;
