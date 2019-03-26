import '../styles/VideoItem.css';
import React from 'react';

const VideoItem = props => {
  const snippet = props.video.snippet;
  return (
    <div
      className="item video-item"
      onClick={() => {
        props.onVideoSelect(props.video);
      }}
    >
      <img
        className="ui image"
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  );
};

// class VideoItem extends React.Component {
//   // constructor(props){
//   //   super(props)
//   // }
//   render() {
//     console.log(this.props.video.snippet.title);
//     const snippet = this.props.video.snippet;
//     return (
//       <li className="thumb-list">
//         <img src={snippet.thumbnails.default.url} alt={snippet.title} />
//       </li>
//     );
//   }
// }

export default VideoItem;
