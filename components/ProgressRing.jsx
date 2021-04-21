import React, { useState, useEffect } from "react";

const ProgressRing = ({
  size,
  transitionTime,
  count,
  countMax,
  percentage,
  circleColor,
  progressBarColor,
  updateDelay = 1000,
}) => {
  const circleSize = (size || 120) / 2;
  const circleRadius = circleSize - 8;
  const circleCircumfurence = circleRadius * 2 * Math.PI;
  const setProgress = function (percent) {
    const value = circleCircumfurence - (percent / 100) * circleCircumfurence;
    console.log(`value`, value);
    setTimeout(() => {
      setOffset(value);
    }, updateDelay);
  };
  const [offset, setOffset] = useState(circleCircumfurence || undefined);

  useEffect(() => {
    if (percentage) {
      setProgress(Math.round(percentage));
    }
    if (count && countMax && !percentage) {
      console.log(Math.round((count / countMax) * 100));
      setProgress(Math.round((count / countMax) * 100));
    }
  }, [percentage, count, countMax]);

  return (
    <svg className="progress-ring" width={size || 120} height={size || 120}>
      <circle
        style={{
          strokeDasharray: `${circleCircumfurence} ${circleCircumfurence}`,
          strokeDashoffset: offset || 0,
          transition: `stroke-dashoffset ${transitionTime || 0.35}s`,
          transform: `rotate(-90deg)`,
          transformOrigin: `50% 50%`,
        }}
        className="progress-ring__circle"
        stroke="white"
        strokeWidth="4"
        fill={circleColor || `transparent`}
        r={circleRadius}
        cx={circleSize}
        cy={circleSize}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        stroke={progressBarColor || `white`}
        strokeWidth="2px"
        dy=".3em"
      >
        {percentage && `${Math.round(percentage)}%`}
        {!percentage && count && countMax && `${count}/${countMax}`}
      </text>
    </svg>
  );
};

export { ProgressRing };
