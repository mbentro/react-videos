import youtube from 'youtube-api-search';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyCLM8KJ5uOF6ixkTxC2-OYDfY-OvJWzRFE';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onSearchSubmit = async searchTerm => {
    await youtube({ key: API_KEY, term: searchTerm }, data => {
      this.setState({ videos: data, selectedVideo: data[0] }); // Send first video as 'selected' on first search
    });
  };

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo: selectedVideo });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
