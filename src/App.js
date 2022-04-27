import React, { useState, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Head1 from './heading.js';

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Head1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
