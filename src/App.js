import React from 'react';
import Provider from '../src/Context/Provider';
import Main from '../src/Components/Main';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
        
  );
}

export default App;
