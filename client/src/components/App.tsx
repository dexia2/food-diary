import React from 'react';
import GlobalStyle from './GlobalStyle';
import Icon from './molecules/Icon';

function App () {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Icon name="night" />
      <h1>Hello, Styled Component!!</h1>
    </React.Fragment>
  );
}

export default App;
