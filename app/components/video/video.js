import React from 'react';

function Video() {
  return (
    <div>
      <video controls width="100%">
        <source src={'/video/LK_intro_Eng.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
