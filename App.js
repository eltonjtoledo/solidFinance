import React from 'react';
import Index from "./src/index.jsx";
import { Provider } from 'react-redux';
import store from './src/Shareds/store';
const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};
export default App;
