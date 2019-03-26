import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading…</div>;
  }
  const videoId = video.id.videoId;
  const snippet = video.snippet;
  const url = `https://youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={url} title="video-player" />
      </div>
      <div className="ui segment">
        <h3 className="ui header">{snippet.title}</h3>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
