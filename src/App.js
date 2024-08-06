import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Banner from './component/navbar/Banner';
import { ReactTyped } from 'react-typed';
import Expert from './component/expert';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <ReactTyped/>
      <Expert/>
    </div>
  );
}

export default App;
