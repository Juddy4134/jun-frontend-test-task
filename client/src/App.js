import './App.css';
import HorsesDistanceList from './components/HorsesDistanceList/HorsesDistanceList';
import { Provider } from 'react-redux';
import store from './store/root'
 
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HorsesDistanceList/>
      </Provider>
      
    </div>
  );
}

export default App;
