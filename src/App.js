import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Banner from './component/navbar/Banner';
import Expert from './component/expert';
import Newsletter from './component/Newsletter';
import Cart from './component/Cart';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Expert/>
      <Newsletter/>
      <Cart/>
      <Footer/>
    </div>
  );
}

export default App;
