import React from 'react';

const ContentSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="content-box">
        <span className="img"></span>
        <div className="text">
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="content-box">
        <span className="img"></span>
        <div className="text">
          <span></span>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSkeleton;
