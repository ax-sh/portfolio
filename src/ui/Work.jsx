import React from 'react';

export const Work = () => {
  return (
    <div id="work" >
      <h1>WORK</h1>
      <div className="work-wrapper scroll-custom">

        {[...Array(51).keys()].map(i => <div>
          <span>
          {i}
          </span>
          <img src={"https://picsum.photos/500/300/?blur&random="+i}/>
          </div>)}
      </div>
    </div>
  );
};
