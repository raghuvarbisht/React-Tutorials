import React from 'react';
import { Provider} from 'react-redux';
import store from './redux/store';
import './App.css';
import BookContainer from './components/BookContainer';
function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer/>
      </div>
    </Provider>
  );
}

export default App;
