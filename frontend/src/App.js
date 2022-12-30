import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
