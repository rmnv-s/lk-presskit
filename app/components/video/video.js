import React from 'react';

const Video = ({ video }) => {
  const isYouTubeLink = video.includes('youtube.com');

  return (
    <div className="video-container">
      {isYouTubeLink ? (
        <iframe
          width="100%"
          height="320"
          src={video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        // Иначе используем video элемент для локальных видео
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Video;
