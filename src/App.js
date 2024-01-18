import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Router from './pages/router';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
