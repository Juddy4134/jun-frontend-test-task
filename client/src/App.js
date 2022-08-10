import './App.css';
import HorsesDistanceList from './components/HorsesRaceField/HorsesRaceField';
import { Provider } from 'react-redux';
import store from './store/root'
import WebSocket from './components/WebSocket/WebSocket'
import Pedestal from './components/Pedestal/Pedestal';
 
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WebSocket/>
        <div className='field-pedestal-container'>
          <HorsesDistanceList/>
          <Pedestal></Pedestal>
        </div>
      </Provider>
      
    </div>
  );
}

export default App;
