import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui search">
              <div className="ui icon input">
                <input
                  type="text"
                  placeholder="Search Videos"
                  value={this.state.searchTerm}
                  onChange={event => {
                    this.setState({ searchTerm: event.target.value });
                  }}
                />
                <i className="search icon" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
