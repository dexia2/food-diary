import React from 'react';
import GlobalStyle from './GlobalStyle';
import Navigation from './molecules/Navigation';

function App () {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Navigation></Navigation>
    </React.Fragment>
  );
}

export default App;
