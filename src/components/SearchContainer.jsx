import React from 'react';
import Search from './Search';
import Results from './Results';

class SearchContainer extends React.Component {
  render() {
    return (
      <div>
        Search Container
        <Search />
        <Results />
      </div>
    )
  }
}

export default SearchContainer;