import React from 'react';

import './App.css';
import { MyForm } from './MyForm';

const App: React.FC = () => {
  return (
    <div className='App'>
      <MyForm
        onSubmit={Values => {
          console.log(Values);
        }}
      />
    </div>
  );
};

export default App;
