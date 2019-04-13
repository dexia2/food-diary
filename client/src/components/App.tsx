import React from 'react';
import GlobalStyle from './GlobalStyle';
import IconWithLoading from './molecules/IconWithLoading';

function App () {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <IconWithLoading name="night" />
      <h1>Hello, Styled Component!!</h1>
    </React.Fragment>
  );
}

export default App;
