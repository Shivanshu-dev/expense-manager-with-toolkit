
import Routes from './routes/Routes';
import { BrowserRouter  } from 'react-router-dom';
import Header from './components/sharedComponents/Header';
import Footer from './components/sharedComponents/Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <header className='header'>
    <Header />
    </header>
     <main className='main-content'>
     <Routes />
     </main>
     <footer>
      <Footer />
     </footer>
    </BrowserRouter>
  );
}

export default App;
