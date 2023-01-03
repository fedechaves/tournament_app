import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import HomeContainer from './containers/HomeContainer';
import AddTeam from './components/add-team/AddTeam';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/add-team" element={<AddTeam />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
