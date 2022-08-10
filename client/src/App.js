import './App.css';
import { Provider } from 'react-redux';
import store from './store/root'
import WebSocket from './components/WebSocket/WebSocket'
import PedestalDataProvider from './components/PedestalDataProvider/PedestalDataProvider'
import RaceFieldDataProvider from './components/RaceFieldDataProvider/RaceFieldDataProvider';
 
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WebSocket/>
        <div className='field-pedestal-container'>
          <RaceFieldDataProvider/>
          <PedestalDataProvider/>
        </div>
      </Provider>
  
    </div>
  );
}

export default App;
