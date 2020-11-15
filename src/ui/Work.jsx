import React from 'react';

export const Work = () => {
  return (
    <div id="work">
      <h1>WORK</h1>
      <div className="work-wrapper">

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => <div>{i}</div>)}
      </div>
    </div>
  );
};
