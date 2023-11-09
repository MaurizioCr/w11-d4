// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Components/Main'; 
import Detail from './Components/Detail'; 

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" Component={Main}/>
      <Route path="/article/:id" Component={Detail} />
    </Router>
  );
};

export default App;
