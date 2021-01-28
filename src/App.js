import {Provider} from 'react-redux';
import "./App.css";
import BookContainer from "./components/redux/Book/BookContainer";
import HooksBookContainer from './components/redux/Book/HooksBookContainer';
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BookContainer />
        <HooksBookContainer />
      </div>
    </Provider>
  );
}

export default App;
